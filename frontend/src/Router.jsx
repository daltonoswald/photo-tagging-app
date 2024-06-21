import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Gamepage from './Gamepage.jsx';
import Leaderboard from './Leaderboard.jsx';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />,
        },
        {
            path: '/gamepage',
            element: <Gamepage />,
        },
        {
            path: '/leaderboard',
            element: <Leaderboard />,
        },
    ]);
    return <RouterProvider router={router} />
}