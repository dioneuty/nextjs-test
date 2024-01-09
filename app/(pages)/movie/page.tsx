'use client';

import Movies from './movies'
import {useState} from "react";

export default function about() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [view,setView] = useState(true);

    return (
        <div>
            <p>movie</p>
            {view && <Movies />}

            <button onClick={() => setView(!view)} className={`bg-blue-300 p-2`}>button</button>
        </div>
    );
}