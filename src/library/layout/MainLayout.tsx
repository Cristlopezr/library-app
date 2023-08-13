import { Dropdown, Header, SearchComponent } from '../components';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-screen grid grid-rows-[80px,1fr,60px] gap-5'>
			<Header />
			<section className='md:container mx-auto p-5'>
				<section className='flex flex-col justify-between sm:flex-row sm:items-center'>
					<SearchComponent />
					<Dropdown />
				</section>
				{children}
			</section>
			<footer className='text-center'>Pie de pagina</footer>
		</div>
	);
};
