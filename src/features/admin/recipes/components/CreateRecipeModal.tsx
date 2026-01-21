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
import { useState } from "react";
import { useCreateRecipe } from "../hooks/useCreateRecipe";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRecipeSchema, CreateRecipeSchema } from "../schemas/recipeSchema";
import { Plus, X } from "lucide-react";

interface CreateRecipeModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const CONSTANT_LEVELS = ["Easy", "Intermediate", "Hard"];

export default function CreateRecipeModal({ isOpen, onOpenChange }: CreateRecipeModalProps) {
    const { addRecipe, isPending } = useCreateRecipe();

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<CreateRecipeSchema>({
        resolver: zodResolver(createRecipeSchema) as any,
        defaultValues: {
            name: "",
            description: "",
            ingredients: [],
            instructions: [],
            level: "Easy",
            servings: 1,
            premium: false,
        },
    });

    // Local state for array inputs
    const [ingredientInput, setIngredientInput] = useState("");
    const [instructionInput, setInstructionInput] = useState("");

    const ingredients = watch("ingredients");
    const instructions = watch("instructions");

    const handleAddIngredient = () => {
        if (!ingredientInput.trim()) return;
        setValue("ingredients", [...(ingredients || []), ingredientInput.trim()]);
        setIngredientInput("");
    };

    const handleRemoveIngredient = (index: number) => {
        setValue("ingredients", ingredients.filter((_, i) => i !== index));
    };

    const handleAddInstruction = () => {
        if (!instructionInput.trim()) return;
        setValue("instructions", [...(instructions || []), instructionInput.trim()]);
        setInstructionInput("");
    };

    const handleRemoveInstruction = (index: number) => {
        setValue("instructions", instructions.filter((_, i) => i !== index));
    };

    const onSubmit = (data: CreateRecipeSchema) => {
        addRecipe(data, {
            onSuccess: () => {
                onOpenChange(false);
                reset();
                setIngredientInput("");
                setInstructionInput("");
            }
        });
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    reset();
                    setIngredientInput("");
                    setInstructionInput("");
                }
                onOpenChange(open);
            }}
            size="3xl"
            scrollBehavior="inside"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Create New Recipe</ModalHeader>
                        <ModalBody>
                            <form id="create-recipe-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

                                <div className="flex flex-col gap-2">
                                    <label className="text-small font-medium text-foreground">Recipe Image <span className="text-danger">*</span></label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            setValue("image", file, { shouldValidate: true });
                                        }}
                                        className="block w-full text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-orange-50 file:text-orange-700
                                            hover:file:bg-orange-100"
                                    />
                                    {errors.image && <p className="text-tiny text-danger">{errors.image.message as string}</p>}
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button
                                className={`bg-orange-500 font-medium ${isPending ? 'opacity-50 cursor-not-allowed' : ''} text-white shadow-lg shadow-orange-500/20`}
                                onPress={() => handleSubmit(onSubmit)()}
                                disabled={isPending}
                            >
                                Create Recipe
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
