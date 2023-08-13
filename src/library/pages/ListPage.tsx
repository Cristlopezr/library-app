import { useBooksContext } from '../../context/BooksContext';
import { BooksGrid } from '../components';
import { MainLayout } from '../layout';

export const ListPage = () => {
	const { filteredReadList } = useBooksContext();

	return (
		<MainLayout>
			<main className='mt-10'>
				<BooksGrid books={filteredReadList} />
			</main>
		</MainLayout>
	);
};
