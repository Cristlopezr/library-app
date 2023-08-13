export const Tooltip = ({ text, className }: { text: string; className: string }) => {
	return (
		<div
			className={`${className} font-semibold opacity-0 w-max bottom-12 right-1/2 translate-x-1/2 transition-opacity bg-canvas pointer-events-none duration-300 shadow-md shadow-zinc-950 p-3 rounded group-hover:opacity-100 z-50 absolute`}
		>
			{text}
			<span className='absolute top-full right-1/2 translate-x-1/2 h-0 w-0 border-r-[10px] border-l-[10px] border-t-[10px] border-transparent border-solid border-t-canvas drop-shadow-[0px_4px_4px_rgb(9,9,11)]'></span>
		</div>
	);
};
