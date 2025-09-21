/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { Search, ChefHat, Star } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-10 h-10 text-white" />,
        title: 'Search by Ingredients',
        description: 'Tell us what ingredients you have in your kitchen, and we’ll find recipes that match perfectly.',
        bgColor: 'bg-blue-500',
    },
    {
        icon: <ChefHat className="w-10 h-10 text-white" />,
        title: 'Cook Amazing Dishes',
        description: 'Follow our step-by-step instructions with helpful tips from professional chefs and home cooks.',
        bgColor: 'bg-green-500',
    },
    {
        icon: <Star className="w-10 h-10 text-white" />,
        title: 'Rate & Share',
        description: 'Share your culinary creations, rate recipes, and help others discover amazing flavors.',
        bgColor: 'bg-orange-500',
    },
];

export default function HowItWorks() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">How Wasfa! Works</h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto">Discover delicious recipes in three simple steps. From ingredients to incredible meals!</p>

                <div className="relative">
                    

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-12 md:gap-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className="flex-1 text-center z-10">
                                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${step.bgColor} shadow-lg relative`}>
                                    {step.icon}
                                    <span className="absolute -bottom-2 -right-2 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-gray-200">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-semibold mt-6 mb-2">{step.title}</h3>
                                <p className="text-gray-500 px-4 md:px-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="mt-16 bg-orange-500 cursor-pointer text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                    Start Cooking Today
                </button>
            </div>
        </div>
    );
}

