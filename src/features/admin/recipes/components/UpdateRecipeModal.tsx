import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
    Select,
    SelectItem,
    Chip,
    Checkbox
} from "@heroui/react";
import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { Recipe } from "@/common/types/Recipe";
import { updateRecipeSchema, UpdateRecipeSchema } from "../schemas/recipeSchema";
import { useUpdateRecipe } from "../hooks/useUpdateRecipe";

interface UpdateRecipeModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    recipe?: Recipe;
}

const CONSTANT_LEVELS = ["Easy", "Intermediate", "Hard"];

export default function UpdateRecipeModal({ isOpen, onOpenChange, recipe }: UpdateRecipeModalProps) {
    

    
    const defaultValues: UpdateRecipeSchema = useMemo(() => {
        if (recipe) {
            return {
                name: recipe.name,
                description: recipe.description,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                level: recipe.level,
                cookTime: recipe.cookTime,
                servings: recipe.servings,
                premium: recipe.premium,
            };
        }
        return {
            name: "",
            description: "",
            ingredients: [],
            instructions: [],
            level: "Easy", // Default level
            cookTime: 0,
            servings: 1,
            premium: false,
        };
    }, [recipe]);

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<UpdateRecipeSchema>({
        resolver: zodResolver(updateRecipeSchema) as any,
        values: defaultValues, 
    });

    
    const [ingredientInput, setIngredientInput] = useState("");
    const [instructionInput, setInstructionInput] = useState("");

    const ingredients = watch("ingredients");
    const instructions = watch("instructions");

    const handleAddIngredient = () => {
        if (!ingredientInput.trim()) return;
        setValue("ingredients", [...(ingredients || []), ingredientInput.trim()], { shouldDirty: true });
        setIngredientInput("");
    };

    const handleRemoveIngredient = (index: number) => {
        setValue("ingredients", ingredients.filter((_, i) => i !== index), { shouldDirty: true });
    };

    const handleAddInstruction = () => {
        if (!instructionInput.trim()) return;
        setValue("instructions", [...(instructions || []), instructionInput.trim()], { shouldDirty: true });
        setInstructionInput("");
    };

    const handleRemoveInstruction = (index: number) => {
        setValue("instructions", instructions.filter((_, i) => i !== index), { shouldDirty: true });
    };

    const { updateRecipe , isPending} = useUpdateRecipe();

    const onSubmit = (data: UpdateRecipeSchema) => {
        const recipeData = {
            name: data.name,
            description: data.description,
            ingredients: data.ingredients.join(','),
            instructions: data.instructions.join(','),
            level: data.level,
            cookTime: data.cookTime,
            servings: data.servings,
            premium: data.premium,
        }
        updateRecipe({
            id: recipe!.id,
            recipe: recipeData 
        } , {
            onSuccess: () => {
                reset();
                onOpenChange(false);
            }
        })
    };

    const handleClose = () => {
        reset();
        setIngredientInput("");
        setInstructionInput("");
        onOpenChange(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={(open) => {
                if (!open) handleClose();
                else onOpenChange(open);
            }}
            size="3xl"
            scrollBehavior="inside"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Update Recipe</ModalHeader>
                        <ModalBody>
                            <form id="update-recipe-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            label="Name"
                                            placeholder="Recipe Name"
                                            isRequired
                                            isInvalid={!!errors.name}
                                            errorMessage={errors.name?.message}
                                        />
                                    )}
                                />
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) => (
                                        <Textarea
                                            {...field}
                                            label="Description"
                                            placeholder="Describe the recipe"
                                            isRequired
                                            isInvalid={!!errors.description}
                                            errorMessage={errors.description?.message}
                                        />
                                    )}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Controller
                                        name="level"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                label="Level"
                                                placeholder="Select Difficulty"
                                                selectedKeys={field.value ? [field.value] : []}
                                                onChange={(e) => field.onChange(e.target.value)}
                                                isRequired
                                                isInvalid={!!errors.level}
                                                errorMessage={errors.level?.message}
                                            >
                                                {CONSTANT_LEVELS.map((lvl) => (
                                                    <SelectItem key={lvl}>
                                                        {lvl}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    <Controller
                                        name="cookTime"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="number"
                                                label="Cook Time (mins)"
                                                placeholder="e.g. 45"
                                                {...field}
                                                value={field.value?.toString()}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                isRequired
                                                isInvalid={!!errors.cookTime}
                                                errorMessage={errors.cookTime?.message}
                                                min={1}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="servings"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="number"
                                                label="Servings"
                                                placeholder="e.g. 4"
                                                {...field}
                                                value={field.value?.toString()}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                isRequired
                                                isInvalid={!!errors.servings}
                                                errorMessage={errors.servings?.message}
                                                min={1}
                                            />
                                        )}
                                    />
                                </div>

                                {/* Ingredients Section */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-end">
                                        <Input
                                            label="Ingredients"
                                            placeholder="Add an ingredient"
                                            value={ingredientInput}
                                            onValueChange={setIngredientInput}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleAddIngredient();
                                                }
                                            }}
                                        />
                                        <Button isIconOnly onPress={handleAddIngredient} color="warning" variant="flat">
                                            <Plus size={20} />
                                        </Button>
                                    </div>
                                    {errors.ingredients && <p className="text-tiny text-danger">{errors.ingredients.message}</p>}
                                    <div className="flex flex-wrap gap-2">
                                        {ingredients?.map((ing, idx) => (
                                            <Chip
                                                key={idx}
                                                onClose={() => handleRemoveIngredient(idx)}
                                                variant="flat"
                                                color="warning"
                                            >
                                                {ing}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>

                                {/* Instructions Section */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-end">
                                        <Input
                                            label="Instructions"
                                            placeholder="Add an instruction step"
                                            value={instructionInput}
                                            onValueChange={setInstructionInput}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleAddInstruction();
                                                }
                                            }}
                                        />
                                        <Button isIconOnly onPress={handleAddInstruction} color="warning" variant="flat">
                                            <Plus size={20} />
                                        </Button>
                                    </div>
                                    {errors.instructions && <p className="text-tiny text-danger">{errors.instructions.message}</p>}
                                    <div className="flex flex-col gap-2">
                                        {instructions?.map((inst, idx) => (
                                            <div key={idx} className="flex items-start gap-2 p-2 bg-default-100 rounded-md">
                                                <span className="font-bold text-gray-500">{idx + 1}.</span>
                                                <p className="flex-1 text-sm">{inst}</p>
                                                <Button size="sm" isIconOnly variant="light" color="danger" onPress={() => handleRemoveInstruction(idx)}>
                                                    <X size={16} />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Controller
                                    name="premium"
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            isSelected={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            Premium Recipe
                                        </Checkbox>
                                    )}
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Cancel
                            </Button>
                            <Button
                                className={`bg-orange-500 font-medium ${isPending ? 'opacity-50 cursor-not-allowed' : ''} text-white shadow-lg shadow-orange-500/20`}
                                onPress={() => handleSubmit(onSubmit)()}
                                disabled={isPending}
                            >
                                Update Recipe
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
