'use client';

import Link from "next/link";
import {useParams} from "next/navigation";

export default function Controls() {

    const searchParams = useParams();
    const id = searchParams.id;

    return (
        <div className={`flex flex-col`}>
            {id && <Link href={'/api-mock'}>LIST</Link>}
            <Link href={'/api-mock/write'}>WRITE</Link>
        </div>
    );
}