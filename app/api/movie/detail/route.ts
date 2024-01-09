import {NextRequest, NextResponse} from "next/server";

const key = process.env.API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
};

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');

    const datsa = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options).then(response => response.json()).catch(err => console.error(err));

    return NextResponse.json(datsa);
}

export async function POST(request: NextRequest) {
    const res = await request.json();
    return NextResponse.json({ res });
}