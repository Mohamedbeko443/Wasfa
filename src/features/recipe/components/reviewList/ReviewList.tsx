import RecipeRating from '@/common/components/recipeRating/RecipeRating'
import { Review } from '@/common/types/Recipe';
import { useDisclosure } from '@heroui/react';
import { Trash, Pen } from 'lucide-react';
import Alert from '../alert/Alert';
import { useState } from 'react';
import UpdateModal from '../updateCommentModal/UpdateModal';


interface ReviewListProps {
    reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const { isOpen: editModalOpen, onOpen: onEditModalOpen, onOpenChange: editModalOpenChange } = useDisclosure();

    const handleDelete = (id: string) => {
        setSelectedId(id);
        onOpen();
    }

   const handleEdit = (review: Review) => {
     setSelectedReview(review);
     onEditModalOpen();
   }

    return (
        <div className="mt-8 space-y-6">
            {reviews.map((review, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                    <p className="font-semibold">{review.username}</p>

                    <div className="flex items-center gap-3 my-2 text-gray-600">
                        <RecipeRating rating={review.rating || 5} />
                        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className=' flex justify-between items-center'>
                        <p className="text-gray-700">
                            {review.body}
                        </p>

                        <div className='flex items-center gap-2 '>
                            <Trash onClick={() => handleDelete(review.id)} className='cursor-pointer text-red-500' size={20} />
                            <Pen onClick={() => handleEdit(review)} className='cursor-pointer text-gray-500' size={20} />
                        </div>
                    </div>

                </div>
            ))}
            <Alert isOpen={isOpen} onOpenChange={onOpenChange} selectedId={selectedId!} />
            <UpdateModal key={selectedReview?.id} isOpen={editModalOpen} onOpenChange={editModalOpenChange} review={selectedReview!} />
        </div>
    )
}

export default ReviewList