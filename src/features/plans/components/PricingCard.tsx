import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    searches: string;
    features: string[];
    buttonText: string;
    variant: 'free' | 'basic' | 'pro';
    isPopular?: boolean;
}




export default function PricingCard({
    title,
    price,
    period,
    searches,
    features,
    buttonText,
    variant,
    isPopular = false,
}: PricingCardProps) {

    const getThemeStyles = () => {
        switch (variant) {
            case 'free':
                return {
                    headerBg: 'bg-gray-600',
                    icon: <Star className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-gray-600 hover:bg-gray-700 text-white',
                    borderColor: 'border-gray-200',
                    textColor: 'text-gray-900',
                };
            case 'basic':
                return {
                    headerBg: 'bg-blue-500',
                    icon: <Zap className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-blue-500 hover:bg-blue-600 text-white',
                    borderColor: 'border-blue-100',
                    textColor: 'text-blue-900',
                };
            case 'pro':
                return {
                    headerBg: 'bg-gradient-to-br from-orange-400 to-red-500',
                    icon: <Crown className="w-8 h-8 text-white mb-4" />,
                    buttonBg: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg',
                    borderColor: 'border-orange-100',
                    textColor: 'text-orange-900',
                    popularBorder: 'border-orange-500 ring-4 ring-orange-500/20',
                };
        }
    };

    const styles = getThemeStyles();

    return (
        <div className={`flex flex-col relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full ${isPopular ? styles.popularBorder : ''}`}>
            {isPopular && (
                <div className="bg-red-500 text-white text-xs font-bold uppercase tracking-widest py-1 text-center absolute top-0 w-full z-10">
                    Most Popular
                </div>
            )}

            {/* Header Section */}
            <div className={`${styles.headerBg} p-8 text-center text-white relative flex flex-col items-center justify-center pt-12`}>
                {styles.icon}
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className="text-sm opacity-80">{period}</span>
                </div>
                <p className="mt-2 font-medium opacity-90">{searches}</p>
            </div>

            {/* Features Section */}
            <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className={`mt-0.5 rounded-full p-0.5 ${variant === 'pro' ? 'text-orange-500' : 'text-green-500'}`}>
                                <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-4 cursor-pointer rounded-xl font-bold transition-all transform active:scale-[0.98] ${styles.buttonBg}`}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
