import { MoreVertical, Edit, Trash2, Crown, Clock, Star, Users } from 'lucide-react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@heroui/react";

const RecipesTable = () => {
    // Mock data based on requested columns
    const recipes = [
        {
            id: 1,
            name: 'Classic Beef Stir Fry',
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            isPremium: true,
            servings: 4,
            cookTime: 45, // minutes
            rating: 4.8,
            level: 'Medium'
        },
        {
            id: 2,
            name: 'Creamy Mushroom Pasta',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            isPremium: false,
            servings: 2,
            cookTime: 30,
            rating: 4.5,
            level: 'Easy'
        },
        {
            id: 3,
            name: 'Grilled Salmon',
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            isPremium: true,
            servings: 3,
            cookTime: 25,
            rating: 4.9,
            level: 'Hard'
        },
        {
            id: 4,
            name: 'Vegetable Curry',
            image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            isPremium: false,
            servings: 6,
            cookTime: 60,
            rating: 4.2,
            level: 'Medium'
        },
        {
            id: 5,
            name: 'Chicken Tikka Masala',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
            isPremium: true,
            servings: 4,
            cookTime: 50,
            rating: 4.7,
            level: 'Medium'
        },
    ];

    const getLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case 'easy': return 'bg-green-100 text-green-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'hard': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
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
                        {recipes.map((recipe) => (
                            <tr key={recipe.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <img src={recipe.image} alt={recipe.name} className="h-12 w-12 rounded-lg object-cover" />
                                        <span className="font-semibold text-gray-900">{recipe.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {recipe.isPremium ? (
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100">
                                            <Crown className="h-4 w-4 text-orange-600" />
                                        </div>
                                    ) : (
                                        <span className="text-gray-400 text-sm">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-gray-600">
                                        <Users className="h-4 w-4" />
                                        <span className="text-sm font-medium">{recipe.servings}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-gray-600">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm font-medium">{recipe.cookTime}m</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5">
                                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-semibold text-gray-900">{recipe.rating}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getLevelColor(recipe.level)}`}>
                                        {recipe.level}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-gray-700">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Recipe Actions">
                                            <DropdownItem key="edit" startContent={<Edit className="h-4 w-4" />}>
                                                Edit Recipe
                                            </DropdownItem>
                                            <DropdownItem key="delete" className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                                Delete Recipe
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipesTable;
