import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
    it('should truncate a string', () => {
        const test = "The main source of happiness in the world comes from coffee.";
        const pipe = new TruncatePipe();

        const result = pipe.transform(test);

        expect(result).toEqual('The main source of happiness...');
    });
});
