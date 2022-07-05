import { extractNthWord } from '../utils/extractor';

type statusOptions = {
    [key: string]: string;
}

const statusEnum: statusOptions = {
    HIT: 'HIT',
    MISS: 'MISS',
    INVALIDATE: 'REFRESH_HIT'
};

class Agora {
    private provider: string;

    private cacheStatus: string;

    private httpMethod: string;

    private statusCode: string;

    private uriPath: string;

    private timeTaken: string;

    private responseSize: string;

    constructor(provider: string, httpMethodUriPath: string, statusCode: string, timeTaken: string, responseSize: string, cacheStatus: string) {
        this.provider       = provider;
        this.httpMethod     = extractNthWord(httpMethodUriPath, 1);
        this.statusCode     = statusCode;
        this.uriPath        = extractNthWord(httpMethodUriPath, 2);
        this.timeTaken      = parseFloat(timeTaken).toFixed();
        this.responseSize   = responseSize;
        this.cacheStatus    = statusEnum[cacheStatus];
    }

    getProvider()       { return this.provider; }

    getHttpMethod()     { return this.httpMethod; }

    getStatusCode()     { return this.statusCode; }

    getUriPath()        { return this.uriPath; }

    getTimeTaken()      { return this.timeTaken; }

    getResponseSize()   { return this.responseSize; }

    getCacheStatus()    { return this.cacheStatus; }

    getInfo() {
        return `"${this.provider}" ${this.httpMethod.replace('"', '')} ${this.statusCode} ${this.uriPath} ${this.timeTaken} ${this.responseSize} ${this.cacheStatus}`;
    }
}

export default Agora;