import RecipeCard from '../recipeCard/RecipeCard';
import RecipeFilter from '../recipeFilter/RecipeFilter';
import { Recipe } from '../../types/Recipe';
import { useRecipes } from '@/features/home/hooks/useRecipes';
import RecipeCardSkeleton from '../recipeSkeleton/RecipeCardSkeleton';
import RecipeCardError from '../recipeErrorPage/RecipeCardError';
import { RecipeParams } from '@/features/home/services';
import NoRecipesFound from '../recipeNotFound/NoRecipesFound';

interface RecipeGalleryProps {
    queryParams: RecipeParams;
    Search?: boolean;
}

export default function RecipeGallery({ queryParams ,  Search }: RecipeGalleryProps) {

    const { data, isError, isPending , refetch } = useRecipes(queryParams);

    
    if (isError) return (
        <RecipeCardError onRetry={refetch} />
    )

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {!Search && (
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Our Most Popular Recipes</h2>
                        <p className="text-gray-600 mt-2 px-3">
                            Discover our most popular and highly-rated recipes, carefully selected by our culinary team and loved by our community.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">Showing {data?.recipes?.length} of {data?.recipes?.length} recipes</p>
                    </div>
                )}

                <RecipeFilter />

                {isPending && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {[...Array(6)].map((_, index) => (
                            <RecipeCardSkeleton key={index} />
                        ))}
                    </div>
                )}

                {
                    data?.recipes?.length === 0 && (
                        <NoRecipesFound />
                    )
                }

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {data?.recipes?.map((recipe: Recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    );
}
