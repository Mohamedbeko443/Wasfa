/* eslint-disable prettier/prettier */

import HeroSection from "../components/Hero"
import RecipeFilter from "../../../common/components/recipeFilter/RecipeFilter"

export default function index() {
    return (
        <div>
            <HeroSection />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <RecipeFilter />
                </div>
            </section>
        </div>
    )
}
