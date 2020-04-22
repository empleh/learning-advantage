import React, { useEffect, useState } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faTimesCircle);

function FullScreen({ show, close, from, reverse, children }) {
    const [appliedClass, setAppliedClass] = useState(['FullScreen']);

    const onClose = () => {
        setAppliedClass(reverse);

        setTimeout(() => {
            close();
        }, 1000);
    };

    useEffect(() => {
        if (show) {
            setAppliedClass(from);
        }
    }, [show, from]);

    return (
        <div className={`FullScreen ${appliedClass}`}>
            <FontAwesomeIcon icon={faTimesCircle} onClick={onClose} className="full-close button" />
            {children}
        </div>
    );
}

export default FullScreen;
