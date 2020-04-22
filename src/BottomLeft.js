import React, { useState } from 'react';
import FullScreen from './FullScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function BottomLeft() {
    const [show, setShow] = useState(false);
    const expando = () => {
        setShow(true);
    };

    return (
        <>
            <div className="BottomLeft">
                <span onClick={expando} className="money hoverable button">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                </span>
                <h3>Invest in Yourself</h3>
            </div>
            <FullScreen show={show} from="FromBottomLeft" reverse="ReverseBottomLeft" close={() => setShow(false)}>
                Graph for years of school to $$
            </FullScreen>
        </>
    );
}

export default BottomLeft;
