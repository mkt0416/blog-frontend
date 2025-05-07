
import React from 'react'
import { getBlogList } from '@/app/libs/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import BlogList from '@/app/components/BlogList';
import Pagenation from '@/app/components/Pagenation';
import SearchField from '@/app/components/SearchField';

type Props = {
    searchParams: {
        q?: string;
    };
};

const Page = async ({ searchParams }: Props) => {
    const { contents: data, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        q: searchParams.q,
    });

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