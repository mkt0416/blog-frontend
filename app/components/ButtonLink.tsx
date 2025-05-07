
import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
    href: string;
    children: ReactNode;
};

const ButtonLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <button
                style={{ boxShadow: '5px 5px 5px rgba(0,0,0,0.5)' }}
                className='bg-gray-400 px-5 py-3 rounded-md'
            >
                {children}
            </button>
        </Link>
    );
};

export default ButtonLink;