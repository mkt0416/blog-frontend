
import React from 'react'
import { getBlogList } from '../libs/microcms';
import { BLOG_LIST_LIMIT } from '../constants';
import BlogList from '../components/BlogList';
import Pagenation from '../components/Pagenation';
import SearchField from '../components/SearchField';

export const revalidate = 0;

const Page = async () => {
    const { contents: data, totalCount } = await getBlogList({ limit: BLOG_LIST_LIMIT });

    return (
        <>
            <div className='my-32'>
                <SearchField />
                <BlogList blog={data} />
                <Pagenation totalCount={totalCount} />
            </div>
        </>
    );
};

export default Page;