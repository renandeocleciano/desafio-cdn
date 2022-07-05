import 'jest';
import Agora from '../../src/models/agora-model';

describe('Agora Model', () => {
    
    const model = new Agora(
        'provider',
        'GET /host',
        '200',
        '148.70',
        '1230',
        'HIT'
    );

    it('Get CacheStatus Equal HIT', () => {
        expect(model.getCacheStatus()).toBe('HIT');
    });

    it('Get CacheStatus Equal HIT', () => {
        expect(model.getTimeTaken()).toBe('149');
    });
});