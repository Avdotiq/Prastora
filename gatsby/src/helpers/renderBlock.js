import React from 'react';
import PopularPost from '../blocks/PopularPost';

export const renderBlock = (item) => {
    switch (item.fieldGroupName) {
        case 'Page_Components_Components_PopularPost':
            return <PopularPost data={item} />;
        default:
            return null;
    }
};