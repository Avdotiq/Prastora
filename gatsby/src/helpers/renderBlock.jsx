import React from 'react';
import PopularPosts from 'components/Blocks/PopularPosts';

export const renderBlock = (item) => {
    switch (item.fieldGroupName) {
        case 'Page_Components_Components_PopularPosts':
            return <PopularPosts data={item} />;
        default:
            return null;
    }
};