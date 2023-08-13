import { useBooksContext } from '../../context/BooksContext';
import { Book } from '../../interfaces/Book';
import { MdAddTask, MdRemoveDone } from 'react-icons/md';
import { useMemo } from 'react';
import { Tooltip } from '.';

//! Desestructurando el book de los props, Props:{book:Book}
export const Card = ({ book }: { book: Book }) => {
	const { onSetActiveBook, onToggleReadList, readList } = useBooksContext();

	const isBookInList = useMemo(() => (readList.includes(book.ISBN) ? true : false), [readList]);

	return (
		<section className='h-fit relative rounded hover:shadow-lg group/card transition-all duration-300 ease-in-out hover:scale-125 hover:z-50 hover:shadow-black'>
			<div className='h-fit cursor-pointer' onClick={() => onSetActiveBook(book)}>
				<img className='aspect-[9/14] w-full object-cover' src={book?.cover} alt={book.title} />
			</div>
			<div className='w-full bottom-0 bg-black bg-opacity-80 opacity-0 group-hover/card:opacity-100 absolute flex justify-between gap-2 items-center py-3 px-5'>
				<p className='text-sm font-bold'>{book.title}</p>
				<button
					className='relative group text-xl font-bold'
					onClick={() => onToggleReadList(book.ISBN)}
				>
					{isBookInList ? <MdRemoveDone /> : <MdAddTask />}
					<Tooltip
						className='text-xs'
						text={isBookInList ? 'Quitar de libros por leer' : 'Añadir a libros por leer'}
					/>
				</button>
			</div>
		</section>
	);
};
