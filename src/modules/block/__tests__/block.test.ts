import Block from '../entities/block';

describe('Block', () => {
  const timestamp = new Date();
  const lastHash = 'foo-last-hash';
  const hash = 'hash';
  const data = ['block', 'chain'];

  const block = new Block({ timestamp, lastHash, hash, data });

  it('has a timestamp, lastHash, hash and data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
