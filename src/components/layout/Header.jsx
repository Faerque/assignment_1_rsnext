import Logo from '../shared/ui/Logo';
import Button from '../shared/ui/Button';

const navItems = [
    { label: 'Home', href: '#', active: true },
    { label: 'Company', href: '#' },
    { label: 'Marketplace', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Contact', href: '#' },
];

function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-[var(--border)]">
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2.5">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-2">
                    <Logo className="h-6 sm:h-9" />
                    <span className="text-xl font-semibold dark:text-white">Learn with Sumit</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map(({ label, href, active }) => (
                        <a
                            key={label}
                            href={href}
                            className={`text-sm font-medium py-2 px-3 rounded-md transition ${active
                                ? 'dark:hover:text-white text-white dark:text-white'
                                : 'text-gray-700 hover:text-purple-700 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                    <Button>Download</Button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
