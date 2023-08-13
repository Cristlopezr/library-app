import { Card } from '.';
import { Book } from '../../interfaces/Book';

export const BooksGrid = ({ books }: { books: Book[] }) => {
	return (
		<section className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid-rows-[repeat(auto-fill,minmax(180px,1fr))] gap-x-2'>
			{books.map(book => (
				<Card key={book.ISBN} book={book} />
			))}
		</section>
	);
};
