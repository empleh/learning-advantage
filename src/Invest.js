import React, { useState } from 'react';
import FullScreen from './FullScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';
import unemployment from './images/unemployment.png';
import earnings from './images/weekly-earnings.png';

fontawesome.library.add(faDollarSign);

function Invest() {
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
                <div className="details-container no-scroll">
                    <a href="https://www.bls.gov/careeroutlook/2018/data-on-display/education-pays.htm" target="_blank">
                        <img src={earnings} height={340} width={450} />
                    </a>
                    <a href="https://www.bls.gov/careeroutlook/2018/data-on-display/education-pays.htm" target="_blank">
                        <img src={unemployment} height={340} width={450} />
                    </a>
                </div>
            </FullScreen>
        </>
    );
}

export default Invest;
