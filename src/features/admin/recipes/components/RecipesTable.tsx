import { useRecipes } from '@/features/home/hooks/useRecipes';
import RecipesTableSkeleton from './RecipesTableSkeleton';
import RecipesTableError from './RecipesTableError';
import RecipeRow from './RecipeRow';
import { Recipe } from '@/common/types/Recipe';
import { useState } from 'react';
import { Pagination } from '@heroui/react';
import { sortType } from '@/features/home/types';
import RecipesTableEmpty from './RecipesTableEmpty';

interface IRecipesTable {
    search: string;
    type: "premium" | undefined;
    sort: sortType;
}

const RecipesTable = ({ search, type, sort }: IRecipesTable) => {
    const [page, setPage] = useState<number>(1);

    const { data, isError, isLoading, refetch } = useRecipes({ page , limit: 6, search, type, sortType: sort , sortBy:"name"});
    

    if (isLoading) return <RecipesTableSkeleton />

    if (isError) return <RecipesTableError onRetry={refetch} />

    if (!data?.recipes?.length) return <RecipesTableEmpty onCreate={() => {}} />

    return (
        <>
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Recipe</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Premium</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Servings</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Cook Time</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Rating</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Level</th>
                                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {
                                data?.recipes?.map((recipe: Recipe) => (
                                    <RecipeRow key={recipe.id} recipe={recipe} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="flex justify-center mt-8">
                {
                    data?.totalPages! > 1 && (
                        <Pagination className=' cursor-pointer' initialPage={page} total={data?.totalPages!} color='warning' size='lg' onChange={(newPage: number) => setPage(newPage)} showShadow variant='bordered' showControls loop />
                    )
                }
            </div>
        </>
    );
};

export default RecipesTable;
