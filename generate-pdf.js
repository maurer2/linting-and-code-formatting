import markdownpdf from 'markdown-pdf';
import fs from 'fs-extra';

fs.createReadStream('brainstorming.md')
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream('brainstorming.pdf'));
