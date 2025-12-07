import HeroSection from "../components/Hero"
import RecipeGallery from '../../../common/components/recipeGallery/RecipeGallery';
import HowItWorks from '../components/HowItWorks';
import { useSearchParams } from "react-router-dom";
import { RecipeParams } from "../services";
import { filterType, limit, sortByType, sortType } from "../types";


export default function Home() {
    const [searchParams] = useSearchParams();

    const sortBy = (searchParams.get('sortBy') as sortByType) || 'name';
    const sortType = (searchParams.get('sort') as sortType) || 'asc';
    const filterBy = (searchParams.get('filter') as filterType) || 'all';
    const limit = (parseInt(searchParams.get('limit') || '6')) as limit;

    const queryParams: RecipeParams = {
        sortBy,
        sortType,
        filterBy,
        limit
    };

    console.log(queryParams);

    return (
        <div>
            <HeroSection />
            <RecipeGallery queryParams={queryParams} />
            <HowItWorks />
        </div>
    )
}
