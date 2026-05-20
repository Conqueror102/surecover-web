const { exec } = require('child_process');
const http = require('http');

const child = exec('npm run dev -- -p 3005', { cwd: __dirname });

let logs = '';
let fetched = false;

child.stdout.on('data', (data) => {
  logs += data;
  console.log(data);
  if (!fetched && (data.includes('Ready in') || data.includes('started server on') || data.includes('Ready'))) {
    fetched = true;
    setTimeout(() => {
      http.get('http://localhost:3005', (res) => {
        let body = '';
        res.on('data', d => body += d);
        res.on('end', () => {
          console.log('\n--- STATUS:', res.statusCode);
          setTimeout(() => {
            child.kill('SIGINT');
            process.exit(0);
          }, 3000); // wait 3 seconds to catch the error stack trace
        });
      }).on('error', (e) => {
        console.log('HTTP ERR:', e);
        child.kill('SIGINT');
        process.exit(1);
      });
    }, 2000);
  }
});

child.stderr.on('data', (data) => {
  console.error(data);
});
