import PricingCard from "../components/PricingCard";
import FAQSection from "../components/FAQSection";
import CallToAction from "../components/CallToAction";

export default function PlansPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* Hero Section */}
            <section className="bg-gray-50 pt-20 pb-16 px-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                    Choose Your Perfect Plan
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Unlock the full potential of Wasfa! with our flexible subscription plans.
                    Find the perfect fit for your culinary journey.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4 max-w-7xl pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                    <PricingCard
                        title="Free"
                        price="$0"
                        period="/forever"
                        searches="10 searches/month"
                        buttonText="Get Started Free"
                        variant="free"
                        features={[
                            "Access to basic recipes",
                            "10 ingredient searches per month",
                            "Basic recipe ratings",
                            "Community access",
                            "Email support"
                        ]}
                    />

                    <PricingCard
                        title="Basic"
                        price="$9.99"
                        period="/per month"
                        searches="50 searches/month"
                        buttonText="Upgrade to Basic"
                        variant="basic"
                        features={[
                            "Everything in Free",
                            "50 ingredient searches per month",
                            "Advanced recipe filters",
                            "Save favorite recipes",
                            "Meal planning tools",
                            "Priority email support"
                        ]}
                    />

                    <PricingCard
                        title="Pro"
                        price="$19.99"
                        period="/per month"
                        searches="Unlimited searches"
                        buttonText="Upgrade to Pro"
                        variant="pro"
                        isPopular={true}
                        features={[
                            "Everything in Basic",
                            "Unlimited ingredient searches",
                            "Premium recipe collection",
                            "Advanced meal planning",
                            "Nutritional information",
                            "Recipe customization",
                            "Priority phone & chat support",
                            "Early access to new features"
                        ]}
                    />
                </div>
            </section>

            <FAQSection />

            <CallToAction />
        </div>
    );
}
