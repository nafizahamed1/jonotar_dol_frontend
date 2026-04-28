export interface Leader {
  _id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;

  facebook?: string;
  twitter?: string;
  linkedin?: string;

  createdAt?: string;
  updatedAt?: string;
}