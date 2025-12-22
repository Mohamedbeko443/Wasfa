



export default function FAQSection() {
    const faqs = [
        {
            question: "What counts as a search?",
            answer: "Each time you search for recipes using ingredients or keywords, it counts as one search. Browsing featured recipes doesn't count against your limit."
        },
        {
            question: "Can I change plans anytime?",
            answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
        },
        {
            question: "What happens if I exceed my search limit?",
            answer: "You'll be prompted to upgrade your plan or wait until your monthly limit resets. You can still browse featured recipes and view saved recipes."
        },
        {
            question: "Is there a free trial for paid plans?",
            answer: "We offer a generous free plan with 10 searches per month. You can upgrade anytime to unlock more features and unlimited searches."
        }
    ];

    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
