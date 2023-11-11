import styles from './header.module.scss';
const Header: React.FC = () => {
	return (
		<header className={`${styles.headerWrap}`}>
			<h3 className={`${styles.headerText}`}>Gen AI</h3>
		</header>
	);
};

export default Header;
