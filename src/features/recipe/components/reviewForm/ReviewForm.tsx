import RecipeRating from '@/common/components/recipeRating/RecipeRating'


function ReviewForm() {
  return (
    <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
                    <h4 className="text-xl font-bold mb-3">Leave a Review</h4>

                    <p className="font-semibold mb-1">Your Rating</p>
                    <RecipeRating rating={3} />

                    <form className="mt-4">
                        <p className="font-semibold mb-1">Your Review</p>
                        <textarea 
                            className="border border-gray-300 rounded-lg p-3 w-full h-28 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        ></textarea>

                        <button 
                            type="submit" 
                            className="bg-orange-500 hover:bg-orange-600 transition cursor-pointer text-white px-6 py-2 rounded-lg mt-3"
                        >
                            Submit
                        </button>
                    </form>
                </div>
  )
}

export default ReviewForm