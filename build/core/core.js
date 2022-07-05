"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agora_model_1 = __importDefault(require("../models/agora-model"));
const splitter_1 = require("../utils/splitter");
const writefile_1 = __importDefault(require("../utils/writefile"));
const splitList = (d) => (0, splitter_1.eofSplitter)(d);
const splitRow = (row) => (0, splitter_1.separatorSplitter)(row);
const convertRowToAgora = (row) => new agora_model_1.default('Minha CDN', row[3], row[1], row[4], row[0], row[2]);
const eachListAndSave = (list, path) => {
    let listSave = '';
    for (let i = 0; i < list.length; i += 1) {
        if (list[i] && list[i].length > 1) {
            const rowLog = splitRow(list[i]);
            const result = convertRowToAgora(rowLog);
            listSave += `${result.getInfo()} \n`;
        }
    }
    (0, writefile_1.default)(path, listSave);
};
class Core {
    saveFile(data, path) {
        const splittedList = splitList(data);
        eachListAndSave(splittedList, path);
    }
}
exports.default = Core;
