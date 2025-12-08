import { MessageSquareOff } from 'lucide-react'



function CommentsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
            <MessageSquareOff className="w-16 h-16 text-gray-400 mb-4" />

            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No Comments Yet
            </h3>

            <p className="text-gray-500 max-w-md">
                Be the first to share your thoughts about this recipe.  
                Your feedback helps others!
            </p>
        </div>
  )
}

export default CommentsNotFound