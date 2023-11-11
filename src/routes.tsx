import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layout/home-layout';
import Home from './pages/home';

const routes = createBrowserRouter([
	{
		id: 'root',
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

export default routes;
