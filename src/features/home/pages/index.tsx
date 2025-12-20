import HeroSection from "../components/Hero"
import RecipeGallery from '../../../common/components/recipeGallery/RecipeGallery';
import HowItWorks from '../components/HowItWorks';
import { useSearchParams } from "react-router-dom";
import { RecipeDefaults } from "../services";
import { filterType, limit, sortByType, sortType } from "../types";


export default function Home() {
    const [searchParams] = useSearchParams();

    const sortBy = (searchParams.get('sortBy') as sortByType) || 'name';
    const sortType = (searchParams.get('sort') as sortType) || 'asc';
    const filterBy = (searchParams.get('filter') as filterType) || 'all';
    const limit = (parseInt(searchParams.get('limit') || '6')) as limit;
    const page = (parseInt(searchParams.get('page') || '1')) as number;

    const queryParams: RecipeDefaults = {
        sortBy,
        sortType,
        filterBy,
        limit,
        ingredients: [],
        page
    };

    

    return (
        <div>
            <HeroSection />
            <RecipeGallery  queryParams={queryParams} />
            <HowItWorks />
        </div>
    )
}
