import https from 'https';
import fs from 'fs';
const url = 'https://api.github.com/users/nihalmachhi2006/repos?per_page=100';
const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };
https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const repos = JSON.parse(data);
    const sorted = repos.sort((a,b) => {
      if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at) - new Date(a.updated_at);
    }).slice(0, 6);
    const out = sorted.map(r => ({ 
      name: r.name, 
      description: r.description, 
      url: r.html_url, 
      language: r.language, 
      homepage: r.homepage,
      created_at: r.created_at
    }));
    fs.writeFileSync('repos.json', JSON.stringify(out, null, 2), 'utf8');
  });
});
