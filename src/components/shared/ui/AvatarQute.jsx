export default function AvatarQute({ src, alt, name, title }) {
    return (
        <>
            <img className="w-6 h-6 rounded-full" src={src} alt={alt} />
            <div className="flex items-center divide-x-2 divide-gray-700 dark:divide-gray-700">
                <div className="pr-3 font-medium text-white dark:text-white">{name}</div>
                <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">{title}</div>
            </div>
        </>
    );
}
