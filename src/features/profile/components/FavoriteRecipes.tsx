import RecipeCard from "@/common/components/recipeCard/RecipeCard";
import { Recipe } from "@/common/types/Recipe";
import { Heart } from 'lucide-react';

const MOCK_RECIPES: Recipe[] = [
    {
        id: '1',
        name: 'Chicken Tikka Masala',
        image: {
            url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
            public_id: '1'
        },
        rating: 4.5,
        description: 'A classic Indian curry known for its rich, fragrant sauce and tender chicken pieces.',
        cookTime: 45,
        servings: 4,
        ingredients: [],
        instructions: [],
        level: 'Intermediate',
        premium: true,
        comments: Array(4).fill({ rating: 4.5 }) as any
    },
    {
        id: '2',
        name: 'Pasta Salad',
        image: {
            url: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80',
            public_id: '2'
        },
        rating: 4.2,
        description: 'A refreshing and vibrant pasta salad packed with fresh vegetables and zesty dressing.',
        cookTime: 20,
        servings: 6,
        ingredients: [],
        instructions: [],
        level: 'Easy',
        premium: false,
        comments: Array(3).fill({ rating: 4.2 }) as any
    }
];

export default function FavoriteRecipes() {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-500" />
                Favorite Recipes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_RECIPES.map(recipe => (
                    <div key={recipe.id} className="transform transition hover:scale-[1.01]">
                        <RecipeCard recipe={recipe} />
                    </div>
                ))}
            </div>
        </div>
    );
}
