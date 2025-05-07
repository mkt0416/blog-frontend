
import ButtonLink from '@/app/components/ButtonLink';
import Detail from '@/app/components/Detail';
import { getBlogDetail } from '@/app/libs/microcms';
import React from 'react'

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

const Page = async ({ params }: Props) => {
    const data = await getBlogDetail(params.slug);

    return (
        <>
            <div className='mt-32'>
                <Detail blog={data} />
            </div>
            <div className='my-10 flex justify-center'>
                <ButtonLink href={'/blog'}>BlogList</ButtonLink>
            </div>
        </>
    );
};

export default Page;