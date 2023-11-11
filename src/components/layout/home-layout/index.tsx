import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import SidebarLeft from './sidebar-left';
import Header from './header';
const HomeLayout: React.FC = () => {
	return (
		<div className={`${styles.layoutWrap} position-relative`}>
			<Header />
			<div className={`${styles.pageBody}`}>
				<SidebarLeft />
				<main className={`${styles.mainWrap}`}>
					<Outlet />
				</main>
			</div>
		</div>
	);
};
export default HomeLayout;
