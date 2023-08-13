import { useState, useEffect, useMemo } from 'react';
import { Book, Library } from '../interfaces/Book';

function removeDiacritics(texto: string): string {
	return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const useBooks = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [activeBook, setActiveBook] = useState<Book | undefined>(undefined);
	const [readList, setReadList] = useState<Book['ISBN'][]>([]);

	const [search, setSearch] = useState('');
	const [genre, setGenre] = useState<string>('');
	const [pages, setPages] = useState({ startPage: 0, endPage: 1200 });

	const booksInReadlist = useMemo(
		() => books.filter(book => readList.includes(book.ISBN)),
		[books, readList]
	);

	const getBooks = async () => {
		const res = await fetch('src/data/books.json');
		const data: Library = await res.json();

		const books = data.library.map(book => book.book);

		setBooks(books);
	};

	const getBooksInList = () => {
		const booksInList = JSON.parse(localStorage.getItem('books') ?? '[]');

		setReadList(booksInList);
	};

	useEffect(() => {
		getBooks();
	}, []);

	useEffect(() => {
		getBooksInList();
	}, []);

	const filteredBooks = useMemo(
		() =>
			books.filter(
				book =>
					removeDiacritics(book.title.toLocaleLowerCase()).includes(search?.toLocaleLowerCase()) &&
					book.genre.includes(genre) &&
					book.pages >= pages.startPage &&
					book.pages <= pages.endPage
			),
		[books, genre, pages, search]
	);

	const filteredReadList = useMemo(
		() =>
			booksInReadlist.filter(
				book =>
					removeDiacritics(book.title.toLocaleLowerCase()).includes(search?.toLocaleLowerCase()) &&
					book.genre.includes(genre) &&
					book.pages >= pages.startPage &&
					book.pages <= pages.endPage
			),
		[books, genre, pages, search]
	);

	const onSearchBook = (value: string) => {
		const noTildes = removeDiacritics(value);
		setSearch(noTildes);
	};

	const filterByGenre = (genre: string) => {
		setGenre(genre);
	};

	const filterByPages = ({ startPage, endPage }: { startPage: number; endPage: number }) => {
		setPages({ startPage, endPage });
	};

	const onSetActiveBook = (book: Book) => {
		setActiveBook(book);
	};

	const onToggleReadList = (id: Book['ISBN']) => {
		const updatedReadList = readList.includes(id)
			? readList.filter(bookId => bookId !== id)
			: [...readList, id];
		localStorage.setItem('books', JSON.stringify(updatedReadList));
		setReadList(updatedReadList);
	};

	return {
		search,
		genre,
		pages,
		books,
		filteredBooks,
		filterByPages,
		onSearchBook,
		filterByGenre,
		activeBook,
		onSetActiveBook,
		readList,
		onToggleReadList,
		filteredReadList,
	};
};
