import FAQItem from '../shared/ui/FAQItem';


function FAQ() {
    return (
        <div className="mx-auto mt-16 max-w-screen-md text-left">
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
                Frequently asked questions
            </h2>
            <div className="divide-y divide-gray-700">
                <FAQItem
                    question="Can I use Landwind in open-source projects?"
                    isStaticOpen={true}
                />

                <FAQItem question="Is there a Figma file available?" />
                <FAQItem question="What are the differences between Landwind and Tailwind UI?" />
                <FAQItem question="What about browser support?" />

            </div>
        </div>
    )
}

export default FAQ