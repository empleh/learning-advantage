import React, { useState } from 'react';
import FullScreen from './FullScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(faGrin);

function Happiness() {
    const [show, setShow] = useState(false);
    const expando = () => {
        setShow(true);
    };

    return (
        <>
            <div className="TopRight">
                <span onClick={expando} className="smile hoverable button">
                    <FontAwesomeIcon icon={faGrin} />
                </span>
                <h3>Happiness</h3>
            </div>
            <FullScreen show={show} from="FromCenter" reverse="ReverseCenter" close={() => setShow(false)}>
                <div className="details-container">
                    <a
                        href="https://www.forbes.com/sites/sarahlandrum/2017/09/15/how-learning-leads-to-happiness-for-millennials/#584f2b5760c5"
                        target="_blank"
                    >
                        <blockquote className="quote">
                            Lifelong learning can lead to a more fulfilling and healthier life
                        </blockquote>
                    </a>

                    <a
                        href="https://www.statece.com/blog/education/investing-in-the-future-the-long-term-benefits-of-continuing-education"
                        target="_blank"
                    >
                        <blockquote className="quote">
                            the more competent you feel, the better you will perform and the more satisfied you will be
                            with your job performance
                        </blockquote>
                    </a>

                    <a
                        href="https://www.actionforhappiness.org/10-keys-to-happier-living/keep-learning-new-things"
                        target="_blank"
                    >
                        <blockquote className="quote">
                            happiness is a skill we can learn. Research shows that happiness, compassion and kindness
                            are the products of skills that can be learned and enhanced through training
                        </blockquote>
                    </a>
                </div>
            </FullScreen>
        </>
    );
}

export default Happiness;
