import 'mocha';
import { expect} from "chai";
import { helloWorld } from './hello_world';

describe('test', () => {
  it('should be hello world', () => {
    expect(helloWorld()).to.eq('hello world');
  });
});
