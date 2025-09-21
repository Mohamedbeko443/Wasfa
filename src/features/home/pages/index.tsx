/* eslint-disable prettier/prettier */

import HeroSection from "../components/Hero"
import RecipeGallery from '../../../common/components/recipeGallery/RecipeGallery';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <RecipeGallery />
            <HowItWorks />
        </div>
    )
}
