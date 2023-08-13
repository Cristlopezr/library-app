import { MdAddTask, MdRemoveDone } from 'react-icons/md';
import { useBooksContext } from '../../context/BooksContext';
import { Book } from '../../interfaces/Book';
import { useMemo } from 'react';
import { Tooltip } from '.';

export const DetailsCard = ({ book }: { book: Book }) => {
	const { onToggleReadList, readList } = useBooksContext();

	const isBookInList = useMemo(() => (readList.includes(book.ISBN) ? true : false), [readList]);

	return (
		<section className='grid grid-cols-[minmax(160px,350px)] justify-center sm:grid-cols-2 gap-5'>
			<div className='w-full max-h-[520px] shadow-lg shadow-black rounded overflow-hidden'>
				<img className='h-full w-full aspect-[9/14]' src={book.cover} alt={book.title} />
			</div>
			<section className='flex flex-col gap-5 text-center sm:text-start'>
				<div>
					<h1 className='text-2xl'>{book.title}</h1>
					<p className='text-gray-600'>ISBN: {book.ISBN}</p>
				</div>
				<p>
					<span>Autor: </span> {book.author.name}
				</p>
				<button
					className='relative group cursor-pointer text-3xl self-center sm:self-start'
					onClick={() => onToggleReadList(book.ISBN)}
				>
					{isBookInList ? <MdRemoveDone /> : <MdAddTask />}
					<Tooltip
						className='text-lg'
						text={isBookInList ? 'Quitar de libros por leer' : 'Añadir a libros por leer'}
					/>
				</button>
				<p>{book.synopsis}</p>
				<p>
					<span>Género: </span>
					{book.genre}
				</p>
				<p>
					<span>Páginas:</span> {book.pages}
				</p>
				<p>
					<span>Año: </span>
					{book.year}
				</p>
			</section>
		</section>
	);
};
