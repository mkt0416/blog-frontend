
import React from 'react'
import { getBlogList, getCategoryDetail } from '@/app/libs/microcms';
import { BLOG_LIST_LIMIT } from '@/app/constants';
import BlogList from '@/app/components/BlogList';
import { notFound } from 'next/navigation';
import Pagenation from '@/app/components/Pagenation';

type Props = {
    params: {
        id: string;
    };
};

const Page = async ({ params }: Props) => {
    const category = await getCategoryDetail(params.id).catch(notFound);
    const { contents: data, totalCount } = await getBlogList({
        limit: BLOG_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
            <div className='my-32'>
                <BlogList blog={data} />
                <Pagenation
                    totalCount={totalCount}
                    basePath={`/blog/category/${category.id}`}
                />
            </div>
        </>
    );
};

export default Page;