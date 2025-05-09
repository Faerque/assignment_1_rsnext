import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonial from "./sections/Testimonial";
import TrustedStats from "./sections/TrustedStats";


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[var(--bg-dark-primary)] text-[var(--text-primary)]">
            <Header />
            <main>
                <Hero />
                <Features />
                <TrustedStats />
                <Testimonial />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}
