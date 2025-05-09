import logo from '../../../assets/logo.svg';

function Logo({ className = '', showText = false, size = 'sm' }) {
    const sizeClass = size === 'lg' ? 'h-9' : 'h-6';
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <img src={logo} alt="Learn with Sumit Logo" className={`${sizeClass}`} />
            {showText && (
                <span className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    Learn with Sumit
                </span>
            )}
        </div>
    );
}

export default Logo;