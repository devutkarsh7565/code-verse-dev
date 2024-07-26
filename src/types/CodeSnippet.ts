export interface ICodeSnippet {
  codeSnippets: CodeSnippet[];
}

export interface CodeSnippet {
  _id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  owner: string;
  tags: string[];
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
