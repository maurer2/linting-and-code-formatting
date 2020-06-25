import markdownpdf from 'markdown-pdf';
// import { promises as fs } from 'fs'
import fs from 'fs';

fs.createReadStream('brainstorming.md')
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream('brainstorming.pdf'));
