import { BlockDto } from '../interfaces';

class Block {
  public timestamp: Date;

  public data: any;

  public hash: string;

  public lastHash: string;

  constructor({ timestamp, data, lastHash, hash }: BlockDto) {
    this.timestamp = timestamp;
    this.data = data;
    this.lastHash = lastHash;
    this.hash = hash;
  }
}

export default Block;
