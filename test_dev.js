const { spawn } = require('child_process');
const http = require('http');

const server = spawn('npm.cmd', ['run', 'dev'], { cwd: __dirname });

let logs = '';

server.stdout.on('data', (data) => {
  const str = data.toString();
  logs += str;
  process.stdout.write(str);
  
  // Wait until server is ready
  if (str.includes('Ready in') || str.includes('started server on')) {
    setTimeout(() => {
      http.get('http://localhost:3000', (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          console.log('\n--- HTTP Response Status:', res.statusCode);
          setTimeout(() => server.kill(), 1000);
        });
      }).on('error', (e) => {
        console.log('\n--- HTTP Request Error:', e.message);
        server.kill();
      });
    }, 2000);
  }
});

server.stderr.on('data', (data) => {
  const str = data.toString();
  logs += str;
  process.stderr.write(str);
});
