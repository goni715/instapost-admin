export interface IReview {
  id: string;
  userName: string;
  image: string;
  email: string;
  feedback: string;
  rating: number;
  reviews: string;
}

export type ReviewType = IReview;
