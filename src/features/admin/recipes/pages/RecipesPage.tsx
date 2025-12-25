import { Plus } from 'lucide-react';
import RecipeFilters from '../components/RecipeFilters';
import RecipesTable from '../components/RecipesTable';
import { Button } from '@heroui/button';

const RecipesPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Recipe Management</h1>
                    <p className="text-gray-500">Manage and organize your recipes</p>
                </div>
                <Button
                    className="bg-orange-500 font-medium text-white shadow-lg shadow-orange-500/20"
                    endContent={<Plus className="h-5 w-5" />}
                >
                    Create New Recipe
                </Button>
            </div>

            <RecipeFilters />
            <RecipesTable />
        </div>
    );
};

export default RecipesPage;
