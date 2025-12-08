
type LevelType = "Easy" | "Intermediate" | "Hard"


export interface Recipe {
  id: string;
  image: {
    url: string;
    public_id: string;
  };
  name: string;
  rating: number;
  description: string;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  level: LevelType;
  premium: boolean;
  comments: Review[];
}



export interface Review {
    id: string;
    recipeId: string;
    userId: string;
    rating: number;
    body: string;
    username: string
    createdAt: string;
}