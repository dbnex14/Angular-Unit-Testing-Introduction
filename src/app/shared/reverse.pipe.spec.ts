import { ReversePipe } from "./reverse.pipe";

describe('Isolated Test', () => {
  it('should use pipe to reverse string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
