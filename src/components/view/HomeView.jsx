import Header from '../header/Header';
import Main from '../main/Main';
import WayToTeach from '../wayToTeach/WayToTeach';
import Button from '../button/Button';
import './HomeView.css';
import { useState } from 'react';
import { ways, differences, button } from '../../data';

export default function HomeView() {
    const [ contentType, setContentType ] = useState(null);

	function handleClick(type) {
		setContentType(type);
	}

	return (
		<>
			<Header />

			<Main />

			<section>
				<ul className='way-to-teach'>
					{ 
						ways.map(way => <WayToTeach { ...way } key={ way.id } />) 
					}
				</ul>
			</section>

			<section>
				<h3 className='mb-3'>Чем мы отличаемся от других</h3>

				<div className='section_button-box'>
					{ 
						button.map(btn => 
							<Button 
								onClick={() => handleClick(btn.type)} 
								key={ btn.id }
								isActive={ contentType === btn.type }
							> 
								{ btn.text } 
							</Button>
						) 
					}
				</div>

				{ contentType 
					? <p className='mt-3'>{ differences[contentType] }</p> 
					: <p className='mt-3'>Нажми на кнопку</p> 
				}
			</section>
		</>
	)
}