import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) walk(dirPath, callback);
    else callback(dirPath);
  });
}

walk('d:/projects/portfolio/components/portfolio', (f) => {
  if (f.endsWith('.tsx') || f.endsWith('.ts')) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/"\.\.\/panel"/g, '"@/components/ui/panel"');
    content = content.replace(/"\.\.\/\.\.\/panel"/g, '"@/components/ui/panel"');
    content = content.replace(/"\.\/panel"/g, '"@/components/ui/panel"');
    content = content.replace(/"\.\.\/\.\.\/data\//g, '"@/data/portfolio/');
    content = content.replace(/"\.\.\/\.\.\/types\//g, '"@/types/portfolio/');
    fs.writeFileSync(f, content);
  }
});

walk('d:/projects/portfolio/data/portfolio', (f) => {
  if (f.endsWith('.tsx') || f.endsWith('.ts')) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/"\.\.\/types\//g, '"@/types/portfolio/');
    content = content.replace(/"@\/features\/portfolio\/types\//g, '"@/types/portfolio/');
    fs.writeFileSync(f, content);
  }
});
