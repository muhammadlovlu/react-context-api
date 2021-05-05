import React from 'react';

const Shipping = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>This is a shopping component counting status : {count}</h4>
        </div>
    );
};

export default Shipping;