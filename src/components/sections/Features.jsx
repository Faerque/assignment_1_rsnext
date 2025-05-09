import FeatureListItem from '../shared/ui/FeatureListItem';
import feature1 from '../../assets/features/feature-1.png';
import feature2 from '../../assets/features/feature-2.png';

function Features() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                {/* First Feature Block */}
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Work with tools you already use
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                        </p>

                        <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <FeatureListItem text="Continuous integration and deployment" />
                            <FeatureListItem text="Development workflow" />
                            <FeatureListItem text="Knowledge management" />
                        </ul>

                        <p className="mb-8 font-light lg:text-sm">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                        </p>
                    </div>
                    <img src={feature1} alt="feature 1" className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" />
                </div>

                {/* Second Feature Block */}
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img src={feature2} alt="feature 2" className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            We invest in the world’s potential
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.

                        </p>

                        <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            <FeatureListItem text="Dynamic reports and dashboards" />
                            <FeatureListItem text="Templates for everyone" />
                            <FeatureListItem text="Development workflow" />
                            <FeatureListItem text="Limitless business automation" />
                            <FeatureListItem text="Knowledge management" />
                        </ul>

                        <p className="font-light lg:text-sm">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Features