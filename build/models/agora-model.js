"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractor_1 = require("../utils/extractor");
const statusEnum = {
    HIT: 'HIT',
    MISS: 'MISS',
    INVALIDATE: 'REFRESH_HIT'
};
class Agora {
    constructor(provider, httpMethodUriPath, statusCode, timeTaken, responseSize, cacheStatus) {
        this.provider = provider;
        this.httpMethod = (0, extractor_1.extractNthWord)(httpMethodUriPath, 1);
        this.statusCode = statusCode;
        this.uriPath = (0, extractor_1.extractNthWord)(httpMethodUriPath, 2);
        this.timeTaken = parseFloat(timeTaken).toFixed();
        this.responseSize = responseSize;
        this.cacheStatus = statusEnum[cacheStatus];
    }
    getProvider() { return this.provider; }
    getHttpMethod() { return this.httpMethod; }
    getStatusCode() { return this.statusCode; }
    getUriPath() { return this.uriPath; }
    getTimeTaken() { return this.timeTaken; }
    getResponseSize() { return this.responseSize; }
    getCacheStatus() { return this.cacheStatus; }
    getInfo() {
        return `"${this.provider}" ${this.httpMethod.replace('"', '')} ${this.statusCode} ${this.uriPath} ${this.timeTaken} ${this.responseSize} ${this.cacheStatus}`;
    }
}
exports.default = Agora;
