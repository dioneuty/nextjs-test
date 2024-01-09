'use client';

import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Movies () {

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        (async() => {
            const {results} = await fetch('/api/movie/list').then(response => response.json());
            setMovies(results);
        })();

        return () => {
            console.log('언마운트');
        };
    }, []);

    return (
        <div className={`flex flex-wrap`}>
            {movies == null && <div className={`p-5 bg-red-300 mx-auto`}>loading...</div>}
            {movies?.map((movie:{id:number, original_title:string, poster_path:string}) => (
                <div key={movie.id} className={`p-4`}>
                    <Link href={{pathname: `/movie/${movie.id}`, query: {title: movie.original_title,}}}>
                        <span>{movie.original_title}</span>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} width={300} height={300} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
