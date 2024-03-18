export interface IBlogs { 
    sys: { id:  number | null | undefined; }; 
    fields: { 
        title: string;  
        slug: string;
        img: { fields: 
            { file: 
                { url: string; }; 
            }; 
        }; 
        author: { 
            fields: { 
                image: { 
                    fields: { 
                        file: { url: string; }; 
                    }; 
                }; 
                name: string; 
                email: string; 
            }; 
        };
    }
}