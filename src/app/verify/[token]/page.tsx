"use client"
import Wrapper from "@/components/wrapper";
import { useParams } from "next/navigation";

export default function VerifyPage() {
    const params = useParams()
    
    const handleVerify = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/authors/verify', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${params.token}`
                }
            })
            const data = await res.json()
            console.log(data);
            alert("Verify Success!")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Wrapper>
            <div className="flex w-full justify-center">
                <button onClick={handleVerify} className="p-1.5 bg-orange-400 rounded-md">Verify</button>
            </div>
        </Wrapper>
    )
}