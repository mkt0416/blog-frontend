
import React from 'react'
import { getBlogList } from '@/app/libs/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import BlogList from '@/app/components/BlogList';
import { notFound } from 'next/navigation';
import Pagenation from '@/app/components/Pagenation';

type Props = {
    params: {
        current: string;
    };
};

const Page = async ({ params }: Props) => {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 0) {
        notFound();
    }

    const { contents: data, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        offset: BLOG_LIST_LIMIT * (current - 1),
    });

    if (data.length === 0) {
        notFound();
    }

    return (
        <>
            <div className='my-32'>
                <BlogList blog={data} />
                <Pagenation
                    totalCount={totalCount}
                    current={current}
                />
            </div>
        </>
    );
};

export default Page;