"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separatorSplitter = exports.eofSplitter = void 0;
const eofSplitter = (data) => data.split(/\r?\n/);
exports.eofSplitter = eofSplitter;
const separatorSplitter = (data) => data.split('|');
exports.separatorSplitter = separatorSplitter;
