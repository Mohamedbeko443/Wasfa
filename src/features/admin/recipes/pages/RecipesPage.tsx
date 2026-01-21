import { Plus } from 'lucide-react';
import RecipeFilters from '../components/RecipeFilters';
import RecipesTable from '../components/RecipesTable';
import { Button } from '@heroui/button';
import { useState } from 'react';
import { sortType } from '@/features/home/types';
import CreateRecipeModal from '../components/CreateRecipeModal';
import { useDisclosure } from '@heroui/react';

const RecipesPage = () => {
    const [search, setSearch] = useState<string>('');
    const [type, setType] = useState<"premium" | undefined>(undefined);
    const [sort, setSort] = useState<sortType>("asc");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
                    onPress={onOpen}
                >
                    Create New Recipe
                </Button>
            </div>

            <RecipeFilters search={search} setSearch={setSearch} type={type} setType={setType} sort={sort} setSort={setSort} />
            <RecipesTable search={search} type={type} sort={sort} />
            <CreateRecipeModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
};

export default RecipesPage;
