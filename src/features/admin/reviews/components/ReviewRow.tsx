import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Ban, Check, MoreVertical, Star, Trash2 } from "lucide-react";
import { formatTimeAgo } from "../../overview/utils";


export type Review = {
    id: string;
    rating: number;
    body: string;
    createdAt: string;
    username: string;
    recipe: {image: {url: string} , name :string };
    user: {isBanned: boolean , id: string};
};

interface ReviewRowProps {
    review: Review;
    onDelete: (id: string) => void;
    onBan: (review: Review) => void;
}
 
function ReviewRow({ review, onDelete , onBan }: ReviewRowProps) {

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={`h-4 w-4 ${index < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
                            }`}
                    />
                ))}
            </div>
        );
    };

  return (
    <tr key={review.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium text-gray-900">{review.username}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={review.recipe.image.url} alt={review.recipe.name} className="h-10 w-10 rounded-lg object-cover" />
                                        <span className="font-medium text-gray-700">{review.recipe.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {renderStars(review.rating)} 
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <p className="truncate text-sm text-gray-600" title={review.body}>
                                        {review.body}
                                    </p>
                                </td> 
                                <td className="px-6 py-4 text-sm text-gray-500">{formatTimeAgo(review.createdAt)}</td>
                                <td className="px-6 py-4 text-right">
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-gray-700">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Review Actions">
                                            <DropdownItem onClick={() => onBan(review)} key="ban" className={review.user.isBanned ? "text-green-600" : "text-yellow-600"} startContent={review.user.isBanned ? <Check className="h-4 w-4" /> : <Ban className="h-4 w-4" />}>
                                                {review.user.isBanned ? "Active User" : "Ban User"}
                                            </DropdownItem>
                                            <DropdownItem onClick={() => onDelete(review.id)} key="delete" className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                                Delete Review
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
  )
}

export default ReviewRow