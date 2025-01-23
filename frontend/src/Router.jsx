import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './homepage/Homepage.jsx'
import Gamepage from './gamepage/Gamepage.jsx';
import Leaderboard from './leaderboard/Leaderboard.jsx';
import Error from './error/Error.jsx';

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />,
            errorElement: <Error />
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