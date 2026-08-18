const { spawnSync } = require('child_process');
const AB = 'D:/npm_global/node_modules/agent-browser/bin/agent-browser-win32-x64.exe';
function run(args) {
  const r = spawnSync(AB, args, { encoding: 'utf8', shell: false });
  if (r.stdout) console.log(r.stdout.trim());
  if (r.stderr) console.log('STDERR:', r.stderr.trim());
  return (r.stdout || '').trim();
}
run(['snapshot', '-i']);
