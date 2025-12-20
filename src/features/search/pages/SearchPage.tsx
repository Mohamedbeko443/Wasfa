import RecipeGallery from "@/common/components/recipeGallery/RecipeGallery";
import { RecipeDefaults } from "@/features/home/services";
import { filterType, limit, sortByType, sortType } from "@/features/home/types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";




function SearchPage() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState<string>("");
    const [searchParams] = useSearchParams();

    const sortBy = (searchParams.get('sortBy') as sortByType) || 'name';
    const sortType = (searchParams.get('sort') as sortType) || 'asc';
    const filterBy = (searchParams.get('filter') as filterType) || 'all';
    const limit = (parseInt(searchParams.get('limit') || '6')) as limit;
    const page = (parseInt(searchParams.get('page') || '1')) as number;

    const queryParams: RecipeDefaults = {
        sortBy,
        sortType,
        filterBy,
        limit,
        ingredients,
        page
    };


    const handleAddIngredient = () => {
        if (ingredient.trim() !== "") {
            setIngredients([...ingredients, ingredient.trim()]);
            setIngredient("");
        }
    };

    


    const handleRemoveIngredient = (index: number) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    return (
        <section className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                        Find Recipes by Ingredients
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mt-3">
                        Enter the ingredients you have and discover delicious recipes you can make right now!
                    </p>
                </div>

                {/* Search Box */}
                <div className="bg-white shadow-xl rounded-3xl p-6 max-w-2xl mx-auto mt-10">
                    <p className="text-gray-700 font-medium mb-2">
                        What ingredients do you have?
                    </p>


                    <div className="flex gap-3 mt-2">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl px-4 py-3 w-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            placeholder="Type an ingredient and press Enter"
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                        />
                        <button
                            onClick={handleAddIngredient}
                            disabled={ingredient.trim() === ""}
                            className="bg-orange-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-orange-300 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
                        >
                            Add
                        </button>
                    </div>

                    {ingredients.length > 0 && (
                        <div className="mt-6">
                            <p className="font-semibold text-gray-700 mb-3">
                                Selected Ingredients:
                            </p>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {ingredients.map((item, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-2 bg-orange-100 text-orange-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm hover:bg-orange-200 transition"
                                    >
                                        {item}
                                        <button
                                            onClick={() => handleRemoveIngredient(index)}
                                            className="text-xl px-1 cursor-pointer rounded-full font-bold transition"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                </div>


                <main className="mt-20">
                    <RecipeGallery queryParams={queryParams} Search />
                </main>

            </div>
        </section>
    );
}

export default SearchPage;
