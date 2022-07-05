import * as fs from 'fs/promises';
import { getVersion } from './extractor';

const template = (content: string) => `#Version: ${getVersion()}
#Date: ${new Date().toLocaleString()}
#Fields: provider http-method status-code uri-path time-taken response-size cache-status
${content}`;

const writeFile = async (path: string, content: string) => {
    try {
        await fs.writeFile(path, template(content));
      } catch (err) {
        process.stdout.write(`${err}`);
      }
};

export default writeFile;