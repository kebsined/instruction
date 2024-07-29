import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const forwardClick = () => {
		setActiveIndex(activeIndex => ++activeIndex);
		console.log(activeIndex);
	};

	const backClick = () => {
		setActiveIndex(activeIndex => --activeIndex);
		console.log(activeIndex);
	};

	const beginClick = () => {
		setActiveIndex(1);
		console.log(activeIndex);
	};

	const lastStep = () => {
		return activeIndex === data.length ? true : false;
	};

	const firstStep = () => {
		return activeIndex === 1 ? true : false;
	};

	const toGetActive = index => {
		setActiveIndex(index + 1);
		console.log(activeIndex);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data.map((step, index) =>
							activeIndex === index + 1 ? step.content : ' '
						)}
					</div>
					<ul className={styles['steps-list']}>
						{data.map((step, index) => (
							<li
								className={
									activeIndex > index + 1
										? styles['steps-item'] + ' ' + styles.done
										: styles['steps-item'] && activeIndex === index + 1
										? styles['steps-item'] + ' ' + styles.active
										: styles['steps-item']
								}
								key={step.id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => toGetActive(index)}
								>
									{step.id.slice(2)}
								</button>
								<p>{step.title}</p>
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={firstStep() ? true : false}
							onClick={backClick}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={lastStep() ? beginClick : forwardClick}
						>
							{lastStep() ? 'Начать с начала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
