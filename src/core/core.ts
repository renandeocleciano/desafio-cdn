import Agora from '../models/agora-model';
import { eofSplitter, separatorSplitter } from '../utils/splitter';
import writeFile from '../utils/writefile';

const splitList = (d: string) => eofSplitter(d);

const splitRow = (row: string) => separatorSplitter(row);
const convertRowToAgora = (row: string[]) => new Agora(
        'Minha CDN',
        row[3],
        row[1],
        row[4],
        row[0],
        row[2]
    );
const eachListAndSave = (list: string[], path: string) => {
    let listSave = '';
    for(let i = 0; i < list.length; i+=1) {
        if (list[i] && list[i].length > 1) {
            const rowLog = splitRow(list[i]);
            const result = convertRowToAgora(rowLog);
            listSave += `${result.getInfo()} \n`;
        }
    }
    writeFile(path, listSave);
};

class Core {

    saveFile(data: string, path: string) {
        const splittedList = splitList(data);
        eachListAndSave(splittedList, path);
    }    
}

export default Core;