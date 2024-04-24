import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper"
import { formatDate } from "@/helper/formatDate";
import { getBlogSlug, getBlogs } from "@/lib/blog"
import { IBlogs } from "@/type/blog"
import Link from "next/link";

export const revalidate = 3600

export const generateStaticParams = async () => {
    const data = await getBlogs()

    return data.blogs.map((blog: IBlogs) => ({
        params: {
            slug: blog.slug
        }
    }))
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const data = await getBlogSlug(params.slug)

    return {
        title: data.blogs.title,
        description: data.blogs.title,
        authors: data.blogs.author.name,
        openGraph: {
            images: [data.blogs.image],
        },
    }
}

export default async function BlogDetail({ params }: { params: { slug: string }}) {
    const data = await getBlogSlug(params.slug)
    
    return (
        <Wrapper>
            <div className="flex">
                <div className="flex-1 sticky max-md:hidden top-[100px] h-full">
                    <Link href={`/`} className="flex items-center gap-2">
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        back
                    </Link>
                    <ShareButton slug={data.blogs.slug} className="mt-5"/>
                </div>
                <div className="flex-[2] pr-52 max-lg:pr-0">
                    <h5 className="mb-2 text-[32px] max-md:text-[24px] font-bold tracking-tight text-gray-900 dark:text-white">{data.blogs.title}</h5>
                    <div className="flex gap-1">
                        <p className="font-bold text-[18px] max-md:text-[14px]">{data.blogs.author.name}</p>
                        ∙
                        <p className="text-[18px] max-md:text-[14px]">{formatDate(data.blogs.date)}</p>
                    </div>
                    <ShareButton slug={data.blogs.slug} className="hidden max-md:block" />
                    <img className="h-[350px] max-sm:h-[200px] max-md:h-[300px] w-full my-5 shadow" src={data.blogs.image} alt={data.blogs.title} />
                    <p>{data.blogs.content}</p>
                </div>
            </div>
        </Wrapper>
    )
}