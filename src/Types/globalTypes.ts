export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

export type Comment = string;

export interface CommentCardProps {
  comments: Comment[]; // Define props expected by CommentCard as a separate interface
}
