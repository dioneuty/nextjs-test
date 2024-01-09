'use client';

import Link from "next/link";
import {usePathname, useParams, useRouter} from "next/navigation";

export default function Controls() {

    const searchParams = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const id = searchParams.id;

    const list = ['/api-mock/write', '/api-mock/update', '/api-mock/'];

    async function del () {
        const resp = await fetch(`http://localhost:9999/topics/${id}`, {
            method: 'DELETE',
        });
        await resp.json();
        router.push('/api-mock');
        router.refresh();
    }

    return (
        <div className={`flex justify-center gap-1`}>
            {(id && !pathname.startsWith('/api-mock/update')) && <Link href={`/api-mock/update/${id}`} className={`p-4 bg-blue-300 rounded`}>Update</Link>}
            {pathname === '/api-mock' && <Link href={`/api-mock/write`} className={`p-4 bg-blue-300 rounded`}>Write</Link>}
            {(id || pathname !== '/api-mock') && <Link href={`/api-mock`} className={`p-4 bg-blue-300 rounded`}>List</Link>}
            {id &&<button onClick={()=> del()} className={`p-4 bg-red-300 rounded`}>Delete</button>}
        </div>
    );
}