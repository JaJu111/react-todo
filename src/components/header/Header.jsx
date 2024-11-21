import './Header.css';
import Logo from '../../assets/react.svg';
import { useState, useEffect } from 'react';

export default function Header() {
	const [clock, setClock] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		// Устанавливаем интервал для обновления времени каждую секунду
		const interval = setInterval(() => {
			setClock(new Date().toLocaleTimeString());
		}, 1000);

		// Очищаем интервал при размонтировании компонента
		return () => clearInterval(interval);
	}, []);

	return (
		<header className='py-4'>
			<div className="container">
				<div className="header-box">
					<img src={Logo} className='logo' />

					<span>Время: {clock}</span>
				</div>
			</div>
		</header>
	)
}