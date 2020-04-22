import React, { useState } from 'react';
import FullScreen from './FullScreen';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faList);

function BottomRight() {
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
                <p>Invest in yourself</p>
                <p>Book Club</p>
                <p>Take an Online Class</p>
                <p>Get training</p>
            </FullScreen>
        </>
    );
}

export default BottomRight;
