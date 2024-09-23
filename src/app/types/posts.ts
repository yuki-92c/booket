export interface IBookInfo {
  bookTitle: string;
  author: string;
  publisher: string;
  publishedYear: number;
}


export interface PostFormProps {
  bookTitle: string;
  author: string;
  publisher: string;
  publishedYear: number;
  postTitle: string;
  postContent: string;
}

export interface IPost {
  id: string;
  postTitle: string;
  user: {
    name: string;
  };
  postDate: string;
  likes: number;
}

export interface IPostDetail extends IPost {
  postContent: string;
  bookTitle: string;
  author: string;
  publishedYear: number;
  publisher: string;
  createdAt: string;
}
