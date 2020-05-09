import { Annonce } from './Annonce';

export interface Deserializable {
    deserialize(input: any): this;
  }