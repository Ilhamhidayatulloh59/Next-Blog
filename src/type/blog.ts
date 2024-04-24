export interface IBlogs {
    id: number;
    title: string;
    slug: string;
    image: string
    author: {
        id: number;
        image: string;
        name: string;
        email: string;
    };
};
