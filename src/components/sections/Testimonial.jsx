import AvatarQute from '../shared/ui/AvatarQute';
import avatarLogo from '../../assets/avatar/michael-gouch.png'


function Testimonial() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:py-24">
                <figure className="mx-auto max-w-screen-md">
                    <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                    </svg>

                    <blockquote>
                        <p className="text-2xl font-medium text-white dark:text-white">
                            "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                        </p>
                    </blockquote>
                    <figcaption className="mt-6 flex justify-center items-center space-x-3">
                        <AvatarQute
                            src={avatarLogo}
                            alt="Michael Gough"
                            name="Micheal Gough"
                            title="CEO at Google"
                        />
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}


export default Testimonial