import RecipeRating from '@/common/components/recipeRating/RecipeRating'
import useAuthStore from '@/features/auth/store/auth'
import { jwtDecode } from "jwt-decode"
import { useAddComment } from '../../hooks/useAddComment';
import { useState } from 'react';
import { Spinner } from '@heroui/react';

interface JwtPayload {
    _id: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
}

function ReviewForm({ recipeId }: {recipeId: string}) {
    const { accessToken } = useAuthStore();  
    const {_id: userId } = jwtDecode<JwtPayload>(accessToken!);
    const [text , setText] = useState<string>('');
    
    const { createComment , isPending } = useAddComment(recipeId);


        const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            createComment({userId , body:text , recipeId})
            setText("");
        } 

  return ( 
    <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
                    <h4 className="text-xl font-bold mb-3">Leave a Review</h4>

                    <p className="font-semibold mb-1">Your Rating</p>
                    <RecipeRating rating={3} />

                    <form onSubmit={handleSubmit} className="mt-4">
                        <p className="font-semibold mb-1">Your Review</p>
                        <textarea 
                            className="border border-gray-300 rounded-lg p-3 w-full h-28 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>

                        <button 
                            type="submit" 
                            disabled={text.trim() === '' || isPending}
                            className="bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-orange-600 transition cursor-pointer text-white px-6 py-2 rounded-lg mt-3"
                        >
                            {isPending ? <Spinner color='danger' /> : 'Submit'}
                        </button>
                    </form>
                </div>
  )
}

export default ReviewForm