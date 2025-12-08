import RecipeRating from '@/common/components/recipeRating/RecipeRating'
import { Review } from '@/common/types/Recipe';

interface ReviewListProps {
    reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
    return (
        <div className="mt-8 space-y-6">
            {reviews.map((review, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                    <p className="font-semibold">{review.username}</p>

                    <div className="flex items-center gap-3 my-2 text-gray-600">
                        <RecipeRating rating={review.rating || 5} />
                        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                    </div>

                    <p className="text-gray-700">
                        {review.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ReviewList