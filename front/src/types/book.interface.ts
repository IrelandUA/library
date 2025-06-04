import type { AuthorInterface } from "./author.interface.ts";

export interface BookInterface {
  _id: string;
  number: number;
  title: string;
  image: string;
  author: string | AuthorInterface[];
  read_now_url: string;
  more_info_url: string;
}
