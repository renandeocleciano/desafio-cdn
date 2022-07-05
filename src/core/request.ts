/* eslint-disable import/prefer-default-export */
import * as https from 'node:https';

export const getDataRequest = (url: string, path: string, cb: any) => {
    https.get(url, (res) => {
        let data = '';      
        res.on('data', (d) => {
          data += d;
        });
        res.on('end', () => {
         cb(data, path);
        });
      }).on('error', (e) => {
        console.error(e);
      });
};