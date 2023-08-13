import { createContext, useContext } from 'react';
import { Book } from '../interfaces/Book';
import { useBooks } from '../hooks';

type BooksContext = {
	books: Book[];
	filteredBooks: Book[];
	readList: Book['ISBN'][];
	onSearchBook: (value: string) => void;
	filterByGenre: (genre: string) => void;
	filterByPages: ({ startPage, endPage }: { startPage: number; endPage: number }) => void;
	activeBook: Book | undefined;
	onSetActiveBook: (book: Book) => void;
	onToggleReadList: (book: Book['ISBN']) => void;
	search: string;
	genre: string;
	pages: {
		startPage: number;
		endPage: number;
	};
	filteredReadList: Book[];
};

type BooksContextProviderProps = {
	children: React.ReactNode;
};

const BooksContext = createContext<BooksContext | null>(null);

export const BooksContextProvider = ({ children }: BooksContextProviderProps) => {
	const {
		filteredBooks,
		onSearchBook,
		filterByGenre,
		filterByPages,
		activeBook,
		onSetActiveBook,
		readList,
		onToggleReadList,
		books,
		search,
		genre,
		pages,
		filteredReadList,
	} = useBooks();

	return (
		<BooksContext.Provider
			value={{
				books,
				filteredBooks,
				onSearchBook,
				filterByGenre,
				filterByPages,
				activeBook,
				onSetActiveBook,
				readList,
				onToggleReadList,
				search,
				genre,
				pages,
				filteredReadList,
			}}
		>
			{children}
		</BooksContext.Provider>
	);
};

export const useBooksContext = () => {
	const context = useContext(BooksContext);
	if (!context) {
		throw Error('useBooksContext must be used within a BooksContextProvider');
	}

	return context;
};
