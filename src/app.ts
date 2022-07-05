import Core from './core/core';
import { getDataRequest } from './core/request';

console.log(process.argv.slice(4));
const args = process.argv.slice(2);

if (args.length === 2) {
    getDataRequest(args[0], args[1], new Core().saveFile);
}