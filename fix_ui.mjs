import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/projects/portfolio/components/portfolio');
files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    if (content.includes('@/components/base/ui/collapsible')) {
      content = content.replace(/@\/components\/base\/ui\/collapsible/g, '@/components/ui/collapsible');
      changed = true;
    }
    if (content.includes('@/components/base/ui/tooltip')) {
      content = content.replace(/@\/components\/base\/ui\/tooltip/g, '@/components/ui/tooltip');
      changed = true;
    }
    if (content.includes('@/components/base/ui/button')) {
      content = content.replace(/@\/components\/base\/ui\/button/g, '@/components/ui/button');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
    }
  }
});
