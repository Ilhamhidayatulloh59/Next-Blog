import { CardBlog } from "@/components/card";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/lib/blog";
import { IBlogs } from "@/type/blog";

export default async function Home() {
  const data = await getBlogs()

  return (
    <Wrapper>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
        {
          data.blogs.map((items: IBlogs) => {
            return (
              <CardBlog 
                key={items.id}
                title={items.title} 
                slug={items.slug} 
                img={items.image}
                img_profile={items.author.image}
                author={items.author.name}
                email={items.author.email}
              />
            )
          })
        }
      </div>
    </Wrapper>
  );
}
