import { useState } from 'react';
import ReviewRow, { Review } from './ReviewRow';
import { useDisclosure } from '@heroui/react';
import AlertModal from '../../components/AlertModal';
import { useDeleteReview } from '../hooks/useDeleteReview';
import { sortByType, sortType } from '../services';
import { useToggleBan } from '../../users/hooks/useToggleBan';

interface ReviewsTableProps {
    comments: Review[];
    filters: { sortBy: sortByType; sort: sortType };
}

const ReviewsTable = ({ comments, filters }: ReviewsTableProps) => {
        const [selectedId, setSelectedId] = useState<string | null>(null);
        const [userAction, setUserAction] = useState<"active" | "ban" | null>(null);
        const { isOpen, onOpen, onOpenChange } = useDisclosure();

        
        const { deleteReview, isPending  } = useDeleteReview(filters);
        const { isOpen: isOpenBan, onOpen: onOpenBan, onOpenChange: onOpenChangeBan } = useDisclosure();
        const { toggleBan, isPending: isBanPending } = useToggleBan(userAction! , "comments");
    
    const handleDelete = (id: string) => {
        setSelectedId(id);
        onOpen();
    }

    const handleBan = (review: Review) => {
        setSelectedId(review.user.id);
        setUserAction(review.user.isBanned ? "active" : "ban");
        onOpenBan();
    }
    
    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Reviewer</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Recipe</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Rating</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Comment</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Date</th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {comments?.map((review) => (
                            <ReviewRow key={review.id} review={review} onDelete={handleDelete} onBan={handleBan}/>
                        ))}
                        {comments?.length === 0 && (
                            <tr>
                                <td colSpan={8} className="px-6 py-4 text-center text-gray-500">No reviews found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
             {
                selectedId && (
                    <AlertModal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        title='Delete Review'
                        message='Are you sure you want to delete this review?'
                        confirmText='Delete'
                        selectedId={selectedId}
                        onConfirm={deleteReview}
                        isPending={isPending}
                    />
                )
            }
            {
                selectedId && (
                    <AlertModal
                        isOpen={isOpenBan}
                        onOpenChange={onOpenChangeBan}
                        title={`${userAction === "ban" ? "Ban" : "Active"} User`}
                        message={`Are you sure you want to ${userAction === "ban" ? "ban" : "active"} this user?`}
                        confirmText={`${userAction === "ban" ? "Ban" : "Active"}`}
                        confirmColor='warning'
                        selectedId={selectedId}
                        onConfirm={toggleBan}
                        isPending={isBanPending}
                    />
                )
            }
        </div>
    );
};

export default ReviewsTable;
