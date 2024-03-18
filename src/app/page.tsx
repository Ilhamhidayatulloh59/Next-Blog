import { CardBlog } from "@/components/card";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/lib/blog";
import { IBlogs } from "@/type/blog";

export default async function Home() {
  
  const blogs = await getBlogs()

  return (
    <Wrapper>
      <div className="flex gap-2 flex-wrap">
        {
          blogs.map((items: IBlogs) => {
            return (
              <CardBlog 
                key={items.sys.id}
                title={items.fields.title} 
                slug={items.fields.slug} 
                img={items.fields.img.fields.file.url}
                img_profile={items.fields.author.fields.image.fields.file.url}
                author={items.fields.author.fields.name}
                email={items.fields.author.fields.email}
              />
            )
          })
        }
      </div>
    </Wrapper>
  );
}
