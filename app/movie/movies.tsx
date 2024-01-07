'use client';

import {useEffect, useState} from 'react'

export default function Movies () {

    const [movies, setMovies] = useState();

    useEffect(() => {
        (async() => {
            const {results} = await fetch('/movie/api/list').then(response => response.json());
            setMovies(results);
        })();

        return () => {
            console.log('언마운트');
        };
    }, []);

    return (
        <div>
            {!movies && <div>loading...</div>}
            {movies?.map((movie:{id:number, original_title:string}) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}
