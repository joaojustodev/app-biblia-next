export type Book = {
  abbrev: {
    pt: string;
    em: string;
  };
  author: string;
  chapters: string;
  comment: string;
  group: string;
  name: string;
  testament: string;
};

export type Chapter = {
  number: number | string;
  verses: number | string;
};

export type Verses = {
  number: string;
  text: string;
};

export type Version = {
  version: string;
  verses: number | string;
};

export interface getAllChapterResponse {
  book: Book[];
  chapter: Chapter[];
  verses: Verses[];
}
