import Wrapper from "@/components/wrapper";
import dynamic from "next/dynamic";

const TextEditor = dynamic( () => {
    return import( '@/components/editor/textEditor' );
  }, { ssr: false } );

export default function Home() {
    return(
        <Wrapper>
            <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div className="mt-2">
                    <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="SPORT">Sport</option>
                        <option value="LIFESTYLE">Lifestyle</option>
                        <option value="HEALTH">Health</option>
                    </select>
                </div>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                    <input className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Url Image</label>
                <div className="mt-2">
                    <input className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Content</label>
                <div className="mt-2">
                    <TextEditor />
                </div>
            </div>
        </Wrapper>
    )
}