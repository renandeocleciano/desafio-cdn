import * as fs from 'fs';

export const extractNthWord = (text: string, pos: number) => text.split(/\s+/)[pos-1];

export const getVersion = () => {
    const packagejson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return packagejson.version;
};