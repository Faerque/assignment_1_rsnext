export default function FAQItem({ question, isStaticOpen }) {
    return (
        <div className="border-b border-gray-700">
            <div className="flex justify-between items-center w-full py-4 text-left text-white font-medium">
                <span>{question}</span>
                <svg
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${isStaticOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {isStaticOpen && (
                <div className="pb-4 text-gray-400 space-y-2">
                    <p>
                        Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p>
                        Check out this guide to learn how to{' '}
                        <a href="#" className="text-purple-400 font-medium underline hover:text-purple-300">
                            get started
                        </a>{' '}
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </div>
            )}
        </div>
    );
}
