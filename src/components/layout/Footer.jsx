import Logo from "../shared/ui/Logo";

function Footer() {
    return (
        <footer className=" text-gray-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 text-center">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                {/* CTA */}
                <div className="mb-12">
                    <h2 className="mb-2 text-2xl font-extrabold text-white">Start your free trial today</h2>
                    <p className="mb-4 text-sm text-gray-400">
                        Try Landwind Platform for 30 days. No credit card required.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition"
                    >
                        Free trial for 30 days
                    </a>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mb-8">
                    {[
                        { title: 'Company', links: ['About', 'Careers', 'Brand Center', 'Blog'] },
                        { title: 'Help center', links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'] },
                        { title: 'Legal', links: ['Privacy Policy', 'Licensing', 'Terms'] },
                        { title: 'Company', links: ['About', 'Careers', 'Brand Center', 'Blog'] },
                        { title: 'Download', links: ['iOS', 'Android', 'Windows', 'MacOS'] },
                    ].map((group, idx) => (
                        <div key={idx}>
                            <h3 className="mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white">{group.title}</h3>
                            <ul>
                                {group.links.map((link, i) => (
                                    <li className="mb-4 text-left" key={i}>
                                        <a href="#" className="hover:underline">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

                {/* Bottom row */}
                <div className="text-center ">
                    {/* Logo + Name */}
                    <a href="#" className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Logo className="h-6 mr-3 sm:h-9" />
                        Learn with Sumit
                    </a>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{' '}
                        <a href="#" className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and{' '}
                        <a href="#" className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                    </span>


                    {/* Social Icons */}
                    <div className="flex justify-center mt-5 space-x-5">
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook">
                            <svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0022 12z" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="#" aria-label="Twitter">
                            <svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.5a8.1 8.1 0 01-2.3.6A4.1 4.1 0 0021.4 3c-.8.5-1.7.8-2.7 1a4.1 4.1 0 00-7 3.7A11.7 11.7 0 013 4.6a4 4 0 001.3 5.5 4.1 4.1 0 01-1.8-.5v.1a4.1 4.1 0 003.3 4 4.2 4.2 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.5 11.8 11.8 0 008 19z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram">
                            <svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                            </svg>
                        </a>
                        {/* GitHub */}
                        <a href="#" aria-label="GitHub">
                            <svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.2-3.2-.2-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0C17 5.8 18 6 18 6c.6 1.5.3 2.7.1 3a5 5 0 011.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .3" />
                            </svg>
                        </a>
                        {/* Dribbble */}
                        <a href="#" aria-label="Dribbble">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer