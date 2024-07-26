export interface ITags {
  tags: Tag[];
}

export interface Tag {
  _id: string;
  name: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
