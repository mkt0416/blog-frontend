
import React from 'react'
import { Blog } from '../libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from './Category';
import Date from './Date';

type Props = {
    blog: Blog;
};

const Detail = ({ blog }: Props) => {
    return (
        <div className='w-full max-w-screen-md mx-auto px-8'>
            <div className='flex flex-col gap-10'>
                <h1>{blog.title}</h1>
                <div className='flex items-center gap-5'>
                    <Link href={`/blog/category/${blog.category.id}`}>
                        <Category category={blog.category} />
                    </Link>
                    <Date date={blog.publishedAt ?? blog.createdAt} />
                </div>
                <p>{blog.description}</p>

                {blog.thumbnail && (
                    <Image
                        style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                        className='w-full rounded-md'
                        src={blog.thumbnail.url}
                        alt='image'
                        width={blog.thumbnail.width}
                        height={blog.thumbnail.height}
                        priority
                    />
                )}
                <div
                    dangerouslySetInnerHTML={{
                        __html: blog.content
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Detail;