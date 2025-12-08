import { Star, Clock, Users } from 'lucide-react';

import { Recipe } from '../../types/Recipe';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      <div className="relative w-full aspect-[4/3]">
        <img
          src={recipe.image.url}
          alt={recipe.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{recipe.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-10">{recipe.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.trunc(recipe.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill={i < Math.trunc(recipe.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="ml-1 text-gray-600">{recipe.rating}</span>
          </div>
        </div>
        <button onClick={() => navigate(`/recipe/${recipe.id}`)} className="w-full cursor-pointer bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
          View Recipe
        </button>
      </div>
    </div>
  );
}
