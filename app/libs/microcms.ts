
import { createClient, MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Blog = {
    title: string;
    description: string;
    content: string;
    category: Category;
    thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICES_DOMAIN) {
    throw new Error('process.env.MICROCMS_SERVICES_DOMAIN is required');
}

if (!process.env.MICROCMS_APIKEY) {
    throw new Error('process.env.MICROCMS_APIKEY is required');
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICES_DOMAIN,
    apiKey: process.env.MICROCMS_APIKEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
        endpoint: 'news',
        queries,
    });
    return listData;
};

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Blog>({
        endpoint: 'news',
        contentId,
        queries,
    });
    return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Blog>({
        endpoint: 'categories',
        contentId,
        queries,
    });
    return detailData;
};