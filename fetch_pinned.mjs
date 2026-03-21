import https from 'https';

const url = 'https://github.com/nihalmachhi2006';
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const repos = [];
    const regex = /<span class="repo" title="([^"]+)">/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      repos.push(match[1]);
    }
    console.log(JSON.stringify(repos));
  });
});
