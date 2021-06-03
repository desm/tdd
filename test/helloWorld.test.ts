import { helloWorld } from '../src/helloWorld';

it('should say hello world', () => {
    expect(helloWorld()).toEqual('hello world');
});
