import RecipeRating from '@/common/components/recipeRating/RecipeRating'
import { ChefHat, Clock, Users } from 'lucide-react';
import { Recipe } from '@/common/types/Recipe';


interface ImageSectionProps {
    recipe: Recipe;
}

function ImageSection({ recipe }: ImageSectionProps) {


    const recipeInfo = [
        { icon: <Clock className="w-5 h-5" />, text: `${recipe.cookTime} mins` },
        { icon: <Users className="w-5 h-5" />, text: `${recipe.servings} servings` },
        { icon: <ChefHat className="w-5 h-5" />, text: recipe.level },
    ];
    
  return (
    <div 
                style={{ backgroundImage: `url(${recipe.image.url})` }} 
                className="relative bg-cover bg-center h-72 md:h-96 flex items-end"
            >
                
                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

                <div className="relative container mx-auto px-6 py-6 space-y-3">
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                        {recipe.name}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white text-lg font-medium">
                        <RecipeRating rating={recipe.rating} />
                        {recipeInfo.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default ImageSection