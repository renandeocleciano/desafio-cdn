"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("./core/core"));
const request_1 = require("./core/request");
console.log(process.argv.slice(4));
const args = process.argv.slice(2);
if (args.length === 2) {
    (0, request_1.getDataRequest)(args[0], args[1], new core_1.default().saveFile);
}
