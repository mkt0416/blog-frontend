
import React from 'react'
import { formatDate } from '../libs/utils';

type Props = {
    date: string;
};

const Date = ({ date }: Props) => {
    return (
        <span>{formatDate(date)}</span>
    );
};

export default Date;