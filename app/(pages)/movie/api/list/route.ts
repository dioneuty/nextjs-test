import { NextResponse } from "next/server";

const key = process.env.API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
};

export async function GET() {
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then(response => response.json()).catch(err => console.error(err));

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const res = await request.json();
    return NextResponse.json({ res });
}