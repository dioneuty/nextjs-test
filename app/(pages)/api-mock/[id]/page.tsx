import Link from "next/link";



export default async function Detail({params}:any) {

    const det = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`, {cache:"no-cache"}).then(resp => resp.json());

    return (
        <>
            <div className={`mb-5 border border-blue-300 p-2`}>
                <div key={det.id}>
                    <span>title: {det.title}</span>
                    <p> body: {det.body}</p>
                </div>
            </div>
        </>
    );
}