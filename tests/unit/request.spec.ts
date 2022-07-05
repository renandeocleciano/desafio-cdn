import 'jest';
import request from 'supertest';

describe('Requester', () => {
    const host = 'https://s3.amazonaws.com';
    const url = '/uux-itaas-static/minha-cdn-logs/input-01.txt';

    it('Status Code - 200', async () => {
        await request(host).get(url).expect(200);
    });
});