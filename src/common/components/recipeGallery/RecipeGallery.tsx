/* eslint-disable prettier/prettier */
import RecipeCard from '../recipeCard/RecipeCard';
import RecipeFilter from '../recipeFilter/RecipeFilter';
import { recipes } from '../../../data/dummy-data';
import { Recipe } from '../../types/Recipe';

export default function RecipeGallery() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Our Most Popular Recipes</h2>
                    <p className="text-gray-600 mt-2 px-3">
                        Discover our most popular and highly-rated recipes, carefully selected by our culinary team and loved by our community.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Showing {recipes.length} of {recipes.length} recipes</p>
                </div>

                <RecipeFilter />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {recipes.map((recipe: Recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    );
}
