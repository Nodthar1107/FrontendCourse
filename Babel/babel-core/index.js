import fs from 'fs';
import { parseSync, transformFromAstSync } from '@babel/core';

const moduleContent = fs.readFileSync('./demo-module.js').toString();
console.log(moduleContent);

const ast = parseSync(moduleContent);
console.log(ast);

const tranformed = transformFromAstSync(ast);
console.log(tranformed.code);
