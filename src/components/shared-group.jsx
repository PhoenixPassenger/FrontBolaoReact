import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';

const SharedGroup = ({ items }) => {
    items = items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));
    
    return (
        <Sortable
            options={{
                animation: 150
            }}
            tag="ol"
        >
            {items}
        </Sortable>
    );
};

export default SharedGroup;