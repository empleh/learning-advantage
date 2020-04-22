import React, { useState } from 'react';
import FullScreen from './FullScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

function TopRight() {
    const [show, setShow] = useState(false);
    const expando = () => {
        setShow(true);
    };

    return (
        <>
            <div className="TopRight">
                <span onClick={expando} className="smile hoverable button">
                    <FontAwesomeIcon icon={faSmileBeam} />
                </span>
                <h3>Happiness</h3>
            </div>
            <FullScreen show={show} from="FromCenter" reverse="ReverseCenter" close={() => setShow(false)}>
                How Growth drives happiness
            </FullScreen>
        </>
    );
}

export default TopRight;
