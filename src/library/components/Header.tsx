import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='flex gap-10 items-center p-3'>
			<img src='assets/images/logo.png' alt='Logo' className='h-full' />
			<nav className='text-xl'>
				<ul className='flex gap-5 justify-between items-center'>
					<li>
						<Link to='/'>Explorar</Link>
					</li>
					<li>
						<Link to='/list'>Mi lista</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
