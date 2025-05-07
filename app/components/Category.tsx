
import React from 'react'
import type { Category } from '../libs/microcms';

type Props = {
    category: Category;
};

const Category = ({ category }: Props) => {
    return (
        <span
            style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
            className='bg-gray-400 px-2 py-1 rounded-md'
        >
            {category.name}
        </span>
    );
};

export default Category;