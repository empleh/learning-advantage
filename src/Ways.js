import React, { useState } from 'react';
import FullScreen from './FullScreen';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import bookclub from './images/book-club.png';
import coursera from './images/coursera.svg';
import aim from './images/aim.png';
import mcc from './images/mcc.jpg';
import opl from './images/opl.png';
import neb from './images/neb.svg';
import makeItStick from './images/make-it-stick.jpg';
import essential from './images/essentialism.jpg';
import makery from './images/the-makery.jpg';

fontawesome.library.add(faList);

function Ways() {
    const [show, setShow] = useState(false);
    const expando = () => {
        setShow(true);
    };

    return (
        <>
            <div className="BottomRight">
                <span onClick={expando} className="list hoverable button">
                    <FontAwesomeIcon icon={faList} />
                </span>
                <h3>Ways to Learn</h3>
            </div>
            <FullScreen show={show} from="FromBottomRight" reverse="ReverseBottomRight" close={() => setShow(false)}>
                <div className="details-container no-scroll">
                    <a href="http://www.continuouslearningbookclub.com" target="_blank">
                        <img src={bookclub} height={100} width={100} />
                    </a>

                    <a href="https://mccneb.edu/Home.aspx" target="_blank">
                        <img src={mcc} height={100} width={100} />
                    </a>

                    <a href="https://www.coursera.org/" target="_blank">
                        <img src={coursera} height={30} width={140} />
                    </a>

                    <a href="https://www.goodreads.com/book/show/18770267-make-it-stick" target="_blank">
                        <img src={makeItStick} height={118} width={78} />
                    </a>

                    <a href="https://interfaceschool.com/" target="_blank">
                        <img src={aim} height={80} width={225} />
                    </a>

                    <a href="https://omahalibrary.org/" target="_blank">
                        <img src={opl} height={65} width={115} />
                    </a>

                    <a href="http://www.themakeryomaha.com/" target="_blank">
                        <img src={makery} height={80} width={300} />
                    </a>

                    <a href="https://www.goodreads.com/book/show/18077875-essentialism" target="_blank">
                        <img src={essential} height={120} width={80} />
                    </a>

                    <a href="https://nebraska.edu/" target="_blank">
                        <img src={neb} height={65} width={115} />
                    </a>
                </div>
            </FullScreen>
        </>
    );
}

export default Ways;
