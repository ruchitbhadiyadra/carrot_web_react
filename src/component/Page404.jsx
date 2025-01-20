import './Page404.css';

import { Container } from "react-bootstrap";

import E404 from './img/404.png';

const Page404 = () => {
    return (
        <>
            <div className="error" id="error">
                <Container>
                    <div className="content text-center position-relative">
                        <img src={E404} alt="404" width={500} />
                        <h1>Oops, looks like the page is lost.</h1>
                        <p className='sub-header text-block-narrow'>This is not a fault, just an accident that was not intentional.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Page404;