$ErrorActionPreference = 'Stop'
$imgPath = 'C:\Users\admin\.openclaw\workspace\tmp\kids-education\_course2.png'

Add-Type -AssemblyName System.Runtime.WindowsRuntime

$getAwaiterMethod = [System.WindowsRuntimeSystemExtensions].GetMember('GetAwaiter') |
  Where-Object { $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' } |
  Select-Object -First 1

function Await($op, $resultType) {
  $m = $getAwaiterMethod.MakeGenericMethod($resultType)
  $awaiter = $m.Invoke($null, @($op))
  $awaiter.GetResult()
}

$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]

$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)) ([Windows.Storage.StorageFile])
$stream = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
$decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])

if ($bitmap.BitmapPixelFormat -ne [Windows.Graphics.Imaging.BitmapPixelFormat]::Bgra8 -or $bitmap.BitmapAlphaMode -ne [Windows.Graphics.Imaging.BitmapAlphaMode]::Premultiplied) {
  $bitmap = [Windows.Graphics.Imaging.SoftwareBitmap]::Convert($bitmap, [Windows.Graphics.Imaging.BitmapPixelFormat]::Bgra8, [Windows.Graphics.Imaging.BitmapAlphaMode]::Premultiplied)
}

$engine = $null
foreach ($l in @('zh-Hant-TW','zh-Hant-HK','zh-Hant','zh-Hans-CN','zh-Hans','en-US')) {
  try {
    $lang = [Windows.Globalization.Language]::new($l)
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
    if ($engine) { Write-Output ("Using language: " + $l); break }
  } catch {}
}
if (-not $engine) { $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }
if (-not $engine) { Write-Output "NO OCR ENGINE AVAILABLE"; exit 1 }

$result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

Write-Output "=== OCR TEXT ==="
foreach ($line in $result.Lines) { Write-Output $line.Text }
