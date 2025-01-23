import { useRouteError, Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import './error.styles.css';

export default function Error() {
    const error = useRouteError();
    console.log((error.data).toString());
    console.dir(error);
    console.log('8', error.statusText)
    console.log(typeof error.error)

    return (
        <>
            <div className='header'>
                <Nav />
            </div>
            <div className='content'>
                <div className='error-page'>
                    <p>There has been an error:</p>
                    <p>{error.data}</p>
                    <Link to='/' className='error-link' >Return to home</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}