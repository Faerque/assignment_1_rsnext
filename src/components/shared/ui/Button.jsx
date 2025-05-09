export default function Button({
    children,
    icon = null,
    className = '',
    hoverClass = '',
    ...props
}) {
    const base =
        'inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border transition justify-center';

    const fallbackStyle =
        'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700';

    const finalClass = `${base} ${hoverClass ? hoverClass : fallbackStyle
        } ${className}`.trim();

    return (
        <button className={finalClass} {...props}>
            {icon &&
                (typeof icon === 'string' ? (
                    <img src={icon} alt="" className="w-4 h-4" />
                ) : (
                    <span className="w-4 h-4">{icon}</span>
                ))}
            {children}
        </button>
    );
}
