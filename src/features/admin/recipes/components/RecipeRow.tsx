import { Recipe } from "@/common/types/Recipe";
import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Clock, Crown, Edit, Image, MoreVertical, Star, Trash2, Users } from "lucide-react";

interface RecipeRowProps {
    recipe: Recipe;
    onDeleteOpen: () => void;
    setSelectedId: (id: string) => void;
}


function RecipeRow({ recipe , onDeleteOpen , setSelectedId }: RecipeRowProps) {


   const getLevelColor = (level: string) => {
        switch (level.toLowerCase()) {
            case 'easy': return 'bg-green-100 text-green-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'hard': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const handleDelete = () => {
        setSelectedId(recipe.id);
        onDeleteOpen();
    }

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <img src={recipe.image.url} alt={recipe.name} className="h-12 w-12 rounded-lg object-cover" />
                                        <span className="font-semibold text-gray-900">{recipe.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {recipe.premium ? (
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
                                            <DropdownItem onClick={handleDelete} key="delete" className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                                Delete Recipe
                                            </DropdownItem>
                                            <DropdownItem key="update-image" className="text-orange-600" color="warning" startContent={<Image  className="h-4 w-4" />}>
                                                Update Recipe Image
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
  )
}

export default RecipeRow