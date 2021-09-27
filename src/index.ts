import Block from './modules/block/entities/block';

const block1 = new Block({
  timestamp: new Date(),
  hash: 'foo-hash',
  data: 'foo-data',
  lastHash: 'foo-last-hash',
});

console.log(block1);
