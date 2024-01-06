'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {ReactElement} from "react";

export default function nav(): ReactElement {

    const pathname = usePathname();

    return (
        <div className='bg-gray-300 p-5 flex gap-3'>
            <Link href="/" style={{color: pathname === '/' ? 'red' : 'blue'}} className='bg-blue-300 p-2 rounded'>Home</Link>
            <Link href="/about" style={{color: pathname === '/about' ? 'red' : 'blue'}}>About</Link>
        </div>
    )
}