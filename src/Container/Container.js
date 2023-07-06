import React from 'react';

function container(props) {
    let minHeight = props.className
    return (
        <div className={`container${minHeight ? ' ' + props.className : ''}`}>
            {props.children}
        </div>
    );
}

export default container;