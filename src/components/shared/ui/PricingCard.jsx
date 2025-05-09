export default function PricingCard({ title, description, price, perks }) {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-600 shadow dark:border-gray-700 xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-400 sm:text-lg">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">${price}</span>
                <span className="text-gray-400">/month</span>
            </div>
            {/* List of features */}
            <ul className="mb-8 space-y-4 text-left">
                {perks.map((perk, i) => (
                    <li key={i} className="flex items-center space-x-3">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>
                            {perk.includes(':') ? (
                                <>
                                    {perk.split(':')[0]}:
                                    <strong className="ml-1">
                                        {perk.split(':')[1].trim()}
                                    </strong>
                                </>
                            ) : (
                                perk
                            )}
                        </span>
                    </li>
                ))}
            </ul>
            <a
                href="#"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
                Get started
            </a>
        </div>
    );
}
