'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Write() {
    const router = useRouter();


    return (
        <form onSubmit={(e:any)=> {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;

            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(process.env.NEXT_PUBLIC_API_URL + '/topics', option)
                .then(resp => resp.json())
                .then(result => {
                    const lastid = result.id;
                    router.push(`/api-mock/${lastid}`)
                    router.refresh();
                })
        }}>
            <div className={`mb-5 p-2`}>
                write
            </div>
            <p>
                <input type="text" name="title" placeholder='title'/>
            </p>
            <textarea name="body" cols={30} rows={10} placeholder="body"></textarea>
            <div className={`flex justify-center gap-2`}>
                <input type="submit" className={`p-4 bg-green-300 rounded`} value={`create`}/>
            </div>
        </form>
    );
}