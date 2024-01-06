import Link from "next/link";
import {ReactElement} from "react";

export default function nav(): ReactElement {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    )
}