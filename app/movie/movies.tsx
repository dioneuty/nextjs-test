'use client';

import {useEffect, useState} from 'react'

export default function Movies () {

    const [movies, setMovies] = useState();

    //todo: authorization의 bearer뒤의 값을 숨겨야 함
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTRjOTk1ODY5YmQxOTNiY2E1OGM1ZjIxMjZjNjU1YyIsInN1YiI6IjYzODRkMmU0MWIxNTdkMDA4MjQ1M2Q4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8MLEqYQU0DK11Eksy-0syIA_RJi9S_bL5wlXYtNG3CA'
        }
    };

    useEffect(() => {
        (async() => {
            const {results} = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then(response => response.json());
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
