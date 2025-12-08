import { Star } from "lucide-react"

function RecipeRating({rating}: {rating: number}) {
    return (
        <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.trunc(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < Math.trunc(rating) ? 'currentColor' : 'none'}
                    />
                ))}
                <span className="ml-1 text-gray-500">{rating}</span>
            </div>
        </div>
    )
}

export default RecipeRating