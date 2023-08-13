import { Navigate, Route, Routes } from 'react-router-dom';
import { BooksPage, ListPage } from '../library/pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<BooksPage />} />
			<Route path='/list' element={<ListPage />} />
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
