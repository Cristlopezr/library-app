import { useBooksContext } from '../../context/BooksContext';
import { BooksGrid, DetailsCard } from '../components';
import { MainLayout } from '../layout';

export const BooksPage = () => {
	const { filteredBooks, activeBook } = useBooksContext();

	return (
		<MainLayout>
			<main className='grid grid-cols-1 xl:grid-cols-[repeat(2,1fr)] gap-5 mt-10'>
				<>
					{activeBook ? (
						<DetailsCard book={activeBook} />
					) : (
						<h1 className='text-8xl text-center'>¡The Lord of The Books!</h1>
					)}
				</>
				<BooksGrid books={filteredBooks} />
			</main>
		</MainLayout>
	);
};
