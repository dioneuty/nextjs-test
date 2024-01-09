'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Update({params}) {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function refresh() {
        const det = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`).then(resp => resp.json());

        setTitle(det.title);
        setBody(det.body);
    }

    useEffect(() => {
        refresh();
    }, []);

    //todo: react-hook-form

    return (
        <form onSubmit={(e:any)=> {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;

            const option = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`, option)
                .then(resp => resp.json());

            router.push(`/api-mock/${params.id}`)
            router.refresh();
        }}>
            <div className={`mb-5 p-2`}>
                write
            </div>
            <p>
                <input type="text" name="title" placeholder='title' onChange={(e)=> setTitle(e.target.value)} value={title}/>
            </p>
            <textarea name="body" cols={30} rows={10} placeholder="body" onChange={e=> setBody(e.target.value)} value={body}></textarea>
            <div className={`flex justify-center gap-2`}>
                <input type="submit" className={`p-4 bg-green-300 rounded`} value={`update`}/>
            </div>
        </form>
    );
}