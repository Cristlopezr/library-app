import { useMemo, useEffect } from 'react';
import { useBooksContext } from '../../context/BooksContext';

export const Dropdown = () => {
	const { filterByGenre, books, genre } = useBooksContext();

	const genres: string[] = useMemo(() => Array.from(new Set(books.map(book => book.genre))), [books]);
	//!Lo que hace set es que no puede contener valores repetidos, entonces solo habra un genero por categoria

	useEffect(() => {
		filterByGenre('');
	}, []);

	return (
		<select
			value={genre}
			className='p-2 rounded text-center'
			onChange={e => filterByGenre(e.target.value)}
		>
			<option value=''>Todos</option>
			{genres.map(genre => (
				<option key={genre} value={genre}>
					{genre}
				</option>
			))}
		</select>
	);
};
