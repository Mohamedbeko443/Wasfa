/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { ChefHat, Star, Search, CookingPot } from 'lucide-react';

// For better organization, we can define the feature data in an array
const featureData = [
    {
        icon: Search,
        title: 'Smart Search',
        description: 'Find recipes by ingredients you already have at home.',
    },
    {
        icon: CookingPot,
        title: 'Expert Recipes',
        description: 'Curated by professional chefs and home cooking enthusiasts.',
    },
    {
        icon: Star,
        title: 'Community Rated',
        description: 'Real reviews and ratings from our cooking community.',
    },
];

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white font-sans">
            {/* Darkening Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Content Container */}
            <div className="relative container mx-auto flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">

                {/* Main Content Area */}
                <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                        <ChefHat className="h-8 w-8 text-white" />
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Discover Your Next <span className="block text-yellow-300">Favorite Recipe</span>
                    </h1>

                    <p className="mt-4 max-w-3xl text-xl text-orange-100 md:text-2xl">
                        Find delicious recipes based on the ingredients you have. Share your culinary creations and connect with food lovers worldwide.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                        <button className="transform rounded-full bg-white px-8 py-4 font-semibold text-lg text-orange-500 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
                            Get Started Free
                        </button>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center text-yellow-300">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-sm text-yellow-200">Rated 4.9/5 by food lovers</p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-12 md:mt-24 md:grid-cols-3">
                    {featureData.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 p-4">
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-1 text-orange-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}