import Button from '../shared/ui/Button';
import heroImage from '../../assets/hero.png';
import GithubLogo from '../../assets/github-mark.svg';
import FigmaLogo from '../../assets/Figma-logo.svg.png';
import CompanyLogos from './CompanyLogos';

function Hero() {
    return (
        <section className="text-white pt-16 pb-12 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-12">
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
                        Building digital
                        <br />
                        products & brands.
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] mb-8">
                        This free and open-source landing page template was built using the utility classes from
                        {" "}<a href='#' className='hover:underline hover:text-white'>Tailwind CSS</a>{" "}
                        and based on the components from the Flowbite Library and the Blocks System.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            icon={GithubLogo}
                            hoverClass="hover:border-white hover:text-white text-white border-gray-600 cursor-pointer"
                        >
                            View on GitHub
                        </Button>
                        <Button icon={FigmaLogo}>
                            Get Figma file
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src={heroImage}
                        alt="Hero Illustration"
                        className="w-full max-w-[550px] mx-auto"
                    />
                </div>
            </div>
            <CompanyLogos />
        </section>
    );
}

export default Hero;
