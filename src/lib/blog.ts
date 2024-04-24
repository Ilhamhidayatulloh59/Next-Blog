const base_url = process.env.BASE_URL

export const getBlogs = async () => {
    const res = await fetch(`${base_url}/blogs`, { next: {  revalidate: 10 } })
    const data = await res.json()

    return data
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`${base_url}/blogs/${slug}`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    return data
}
