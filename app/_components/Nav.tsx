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

    const cmStyle = 'bg-blue-300 p-2 rounded';

    return (
        <div className='bg-gray-300 p-5 flex gap-3 fixed w-full justify-center'>
            <Link href="/" className={`${styles.link} ${setActiveColor('/')} ${cmStyle}`}>Home</Link>
            <Link href="/about" className={`${styles.link} ${setActiveColor('/about')} ${cmStyle}`}>About</Link>
            <Link href="/api-mock" className={`${styles.link} ${setActiveColor('/api-mock')} ${cmStyle}`}>Api-Mock</Link>
            <Link href="/movie" className={`${styles.link} ${setActiveColor('/movie')} ${cmStyle}`}>Movie</Link>
            <Link href="/movie-server" className={`${styles.link} ${setActiveColor('/movie-server')} ${cmStyle}`}>Movie-server</Link>
            {/*<Link href="/about" className={`${styles.link} ${setActiveColor('/about')} && styles.active}`}>About</Link>
            <Link href="/movie" className={'purple'}>Movie</Link>*/}
            <style jsx>{`
                /*div {
                    background-color: purple;
                }*/
                .purple {
                    color: magenta;
                }
            `}
            </style>
        </div>
    )
}