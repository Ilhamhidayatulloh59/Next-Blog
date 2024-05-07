"use client"
import Wrapper from "@/components/wrapper";
import { useRef, useState } from "react";
import Cookies from "js-cookie";

export default function ProfilePage() {
    const imageRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File | null>(null)
    
    const handleChange = () => {
        if (imageRef.current && imageRef.current.files) {
            const data = imageRef.current?.files[0]
            setImage(data)
        }
    }

    const handleUpload = async () => {
        try {
            const token = Cookies.get("token")
            const formData = new FormData()
            if (image) {
                formData.append("file", image)
            }
            
            const res = await fetch('http://localhost:8000/api/authors/image', {
                method: "PATCH",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}` 
                }
            })
            const response = await res.json()

            if (response.status == 'ok') {
                alert('image berhasil diunggah')
            } else {
                throw response
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Wrapper>
            <input accept="image/png" onChange={handleChange} multiple type="file" ref={imageRef} />
            <button onClick={handleUpload} className=" bg-orange-400 p-1.5 ">upload</button>
        </Wrapper>
    )
}