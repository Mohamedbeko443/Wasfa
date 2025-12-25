import { MoreVertical, Trash2, Ban, Star } from 'lucide-react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@heroui/react";

const ReviewsTable = () => {
    const reviews = [
        {
            id: 1,
            user: {
                name: 'Sarah Johnson',
                avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
            },
            recipe: {
                name: 'Classic Beef Stir Fry',
                image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
            },
            rating: 5,
            comment: "Absolutely delicious! The sauce was perfect and the beef was so tender. Will definitely make this again.",
            date: '2 hours ago'
        },
        {
            id: 2,
            user: {
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
            },
            recipe: {
                name: 'Vegetable Curry',
                image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
            },
            rating: 4,
            comment: "Great flavor but a bit too spicy for my kids. I'll reduce the chili next time.",
            date: '5 hours ago'
        },
        {
            id: 3,
            user: {
                name: 'Jane Smith',
                avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
            },
            recipe: {
                name: 'Grilled Salmon',
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
            },
            rating: 1,
            comment: "The recipe instructions were very confusing. My fish ended up dry and overcooked.",
            date: '1 day ago'
        },
        {
            id: 4,
            user: {
                name: 'Bob Wilson',
                avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
            },
            recipe: {
                name: 'Chicken Tikka Masala',
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
            },
            rating: 5,
            comment: "Best tikka masala recipe I've found online! Authentic taste.",
            date: '2 days ago'
        }
    ];

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
                        {reviews.map((review) => (
                            <tr key={review.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={review.user.avatar} alt={review.user.name} className="h-9 w-9 rounded-full object-cover" />
                                        <span className="font-medium text-gray-900">{review.user.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={review.recipe.image} alt={review.recipe.name} className="h-10 w-10 rounded-lg object-cover" />
                                        <span className="font-medium text-gray-700">{review.recipe.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {renderStars(review.rating)}
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <p className="truncate text-sm text-gray-600" title={review.comment}>
                                        {review.comment}
                                    </p>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{review.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-gray-700">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Review Actions">
                                            <DropdownItem key="ban" className="text-yellow-600" startContent={<Ban className="h-4 w-4" />}>
                                                Ban User
                                            </DropdownItem>
                                            <DropdownItem key="delete" className="text-red-600" color="danger" startContent={<Trash2 className="h-4 w-4" />}>
                                                Delete Review
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewsTable;
