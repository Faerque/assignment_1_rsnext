import PricingCard from '../shared/ui/PricingCard';
import FAQ from './FAQ';


const pricingData = [
    {
        title: 'Starter',
        description: 'Best option for personal use & for your next project.',
        price: 29,
        perks: [
            'Individual configuration',
            'No setup, or hidden fees',
            'Team size: 1 developer',
            'Premium support: 6 months',
            'Free updates: 6 months',
        ],
    },
    {
        title: 'Company',
        description: 'Relevant for multiple users, extended & premium support.',
        price: 99,
        perks: [
            'Individual configuration',
            'No setup, or hidden fees',
            'Team size: 10 developers',
            'Premium support: 24 months',
            'Free updates: 24 months',
        ],
    },
    {
        title: 'Enterprise',
        description: 'Best for large scale uses and extended redistribution rights.',
        price: 499,
        perks: [
            'Individual configuration',
            'No setup, or hidden fees',
            'Team size: 100+ developers',
            'Premium support: 36 months',
            'Free updates: 36 months',
        ],
    },
];




function Pricing() {
    return (
        <section className="bg-gray-900 dark:bg-gray-900 py-16">
            <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md lg:mb-12">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Designed for business teams like yours</h2>
                    <p className="mb-5 font-light text-gray-400 sm:text-xl">
                        Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>

                <div className="space-y-8 sm:gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 sm:space-y-0">
                    {pricingData.map((item, index) => (
                        <PricingCard key={index} {...item} />
                    ))}
                </div>
            </div>
            <FAQ />
        </section>
    );
}
export default Pricing