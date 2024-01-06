'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {ReactElement} from "react";
import styles from './nav.module.css';

export default function Nav(): ReactElement {

    const pathname = usePathname();

    const setActiveColor = (url: String) => {
        return pathname === url && styles.active;
    }

    return (
        <div className='bg-gray-300 p-5 flex gap-3'>
            <Link href="/" className={`${styles.link} ${setActiveColor('/')} bg-blue-300 p-2 rounded`}>Home</Link>
            <Link href="/about" className={`${styles.link} ${setActiveColor('/about')} && styles.active}`}>About</Link>
        </div>
    )
}