import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { useRecipe } from "../hooks/useRecipe";
import { useEffect } from "react";

import RecipeError from "./RecipeError";
import ImageSection from "../components/imageSection/ImageSection";
import Ingredients from "../components/ingredients/Ingredients";
import Instructions from "../components/instuctions/Instructions";
import ReviewForm from "../components/reviewForm/ReviewForm";
import ReviewList from "../components/reviewList/ReviewList";
import RecipePageSkeleton from "./RecipePageSkeleton";
import CommentsNotFound from "../components/notFoundComments/CommentsNotFound";
import useAuthStore from "@/features/auth/store/auth";


export default function RecipePage() {
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const { recipe, isLoading, error, refetch } = useRecipe(id!);
    const { accessToken } = useAuthStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    if(isLoading)
    {
        return <RecipePageSkeleton />
    }

    if(error)
    {
        return <RecipeError message={error.message} onRetry={refetch} />
    }

    return (
        <section className="bg-gray-50 pb-12">
            {/* Back Button */}
            <div className="container mx-auto p-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-lg text-gray-700 cursor-pointer hover:text-orange-500 transition"
                >
                    <ArrowLeft size={22} /> Back
                </button>
            </div>

            {/* Image Section */}
            <ImageSection recipe={recipe!} />

            {/* Description */}
            <div className="container mx-auto px-6 mt-8">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl">
                    {recipe?.description}
                </p>
            </div>

            {/* Ingredients & Instructions */}
            <div className="container mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* Ingredients */}
                <Ingredients ingredients={recipe?.ingredients!} />

                {/* Instructions */}
                <Instructions instructions={recipe?.instructions!} />
            </div>

            {/* Ratings & Reviews */}
            <div className="container mx-auto px-6 mt-12 mb-16 bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-3xl font-bold mb-6">Ratings & Reviews</h2>

                {/* Review Form */} 
                {
                    accessToken && (
                        <ReviewForm recipeId={recipe?.id!}/>
                    )
                }

                {recipe?.comments.length === 0 ? (
                    <CommentsNotFound/>
                ) : (
                    <ReviewList reviews={recipe?.comments!} />
                )}
            </div>
        </section>
    );
}
