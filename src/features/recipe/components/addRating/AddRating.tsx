import { useState } from "react";
import { Star } from "lucide-react";



export default function AddRating({rating , setRating}: {rating: number , setRating: (rating: number) => void}) {
    const [hover, setHover] = useState(0);

    

    return (
        <div className="flex items-center gap-1 cursor-pointer select-none">
            {[1, 2, 3, 4, 5].map((value) => {
                const isFilled = value <= (hover || rating);

                return (
                    <Star
                        key={value}
                        className={`w-6 h-6 transition-all ${isFilled ? "text-yellow-400" : "text-gray-300"
                            }`}
                        fill={isFilled ? "currentColor" : "none"}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(value)}
                    />
                );
            })}
            <span className="ml-2 text-sm text-gray-600">{rating > 0 ? rating : null}</span>
        </div>
    );
}
