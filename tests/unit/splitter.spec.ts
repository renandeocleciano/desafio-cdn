import 'jest';
import { eofSplitter, separatorSplitter } from '../../src/utils/splitter';

describe('Splitters', () => {
    const list = 'Linha1 \r\n Linha2 \r\n Linha3 \r\n';
    const row = 'TEXT|TEXT|TEXT';

    it('Check if split list in array', () => {
        const eof = eofSplitter(list);
        expect(eof.length).toBeGreaterThan(3);
    });

    it('Check if split row in array', () => {
        const separator = separatorSplitter(row);
        expect(separator.length).toEqual(3);
    });
});