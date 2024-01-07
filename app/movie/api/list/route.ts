import { NextResponse } from "next/server";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTRjOTk1ODY5YmQxOTNiY2E1OGM1ZjIxMjZjNjU1YyIsInN1YiI6IjYzODRkMmU0MWIxNTdkMDA4MjQ1M2Q4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8MLEqYQU0DK11Eksy-0syIA_RJi9S_bL5wlXYtNG3CA'
    }
};

export async function GET() {
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then(response => response.json());

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const res = await request.json();
    return NextResponse.json({ res });
}