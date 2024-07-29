import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const forwardClick = () => {
		setActiveIndex(activeIndex => ++activeIndex);
	};

	const backClick = () => {
		setActiveIndex(activeIndex => --activeIndex);
	};

	const beginClick = () => {
		setActiveIndex(1);
	};

	const lastStep = () => {
		return activeIndex === data.length;
	};

	const firstStep = () => {
		return activeIndex === 1;
	};

	const toGetActive = index => {
		setActiveIndex(index + 1);
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
								className={`${styles['steps-item']} ${
									activeIndex > index + 1 && styles.done
								} ${activeIndex === index + 1 && styles.active}`}
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
							disabled={firstStep()}
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
