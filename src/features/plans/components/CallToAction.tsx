import { useNavigate } from "react-router-dom";




export default function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 max-w-5xl mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    {/* Abstract decorative circle */}
                    <div className="w-64 h-64 rounded-full bg-white blur-3xl -mr-16 -mt-16"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-10">
                    {/* Abstract decorative circle */}
                    <div className="w-64 h-64 rounded-full bg-white blur-3xl -ml-16 -mb-16"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Cooking?</h2>
                    <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of food lovers discovering amazing recipes every day
                    </p>
                    <button onClick={() => navigate('/search')} className="bg-white cursor-pointer text-orange-600 hover:text-orange-700 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                        Start Searching
                    </button>
                </div>
            </div>
        </div>
    );
}
