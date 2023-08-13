import { useBooksContext } from '../../context/BooksContext';
import { useEffect } from 'react';

export const SearchComponent = () => {
	const { onSearchBook, search } = useBooksContext();

	useEffect(() => {
		onSearchBook('');
	}, []);

	return (
		<input
			className='border border-blue-200 rounded-lg px-5 py-2'
			placeholder='Buscar por título'
			type='text'
			value={search}
			onChange={e => onSearchBook(e.target.value)}
		/>
	);
};
