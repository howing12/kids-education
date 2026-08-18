const { spawnSync } = require('child_process');
const DIR = 'C:/Users/admin/.openclaw/workspace/tmp/kids-education';
const AB = 'D:/npm_global/node_modules/agent-browser/bin/agent-browser-win32-x64.exe';
function run(args) {
  const r = spawnSync(AB, args, { encoding: 'utf8', shell: false });
  if (r.stdout) console.log(r.stdout.trim());
  if (r.stderr) console.log('STDERR:', r.stderr.trim());
  return (r.stdout || '').trim();
}
// scroll to courses section
run(['eval', "document.querySelector('#courses').scrollIntoView();"]);
run(['screenshot', DIR + '/_shot_courses.png']);
run(['eval', "document.querySelector('#teachers').scrollIntoView();"]);
run(['screenshot', DIR + '/_shot_teachers.png']);
run(['eval', "document.querySelector('#contact').scrollIntoView();"]);
run(['screenshot', DIR + '/_shot_contact.png']);
