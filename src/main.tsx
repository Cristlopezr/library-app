import React from 'react';
import ReactDOM from 'react-dom/client';
import LibraryApp from './LibraryApp.tsx';
import './index.css';
import { BooksContextProvider } from './context/BooksContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<BooksContextProvider>
				<LibraryApp />
			</BooksContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
