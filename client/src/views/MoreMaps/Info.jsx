import * as React from 'react';

function Info(props) {
    const { info } = props;
    const displayName = `${info.city}, ${info.state}`;

    return (
        <div>
            <div>
                {displayName} |{' '}
                <a
                    target="_new"
                    href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${'Warsaw'}`}
                >
                    Wikipedia
        </a>
            </div>
            <img width={240} src={info.image} />
        </div>
    );
}

export default React.memo(Info);