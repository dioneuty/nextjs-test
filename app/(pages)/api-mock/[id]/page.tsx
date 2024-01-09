import Link from "next/link";



export default async function Detail({params}:any) {

    const det = await fetch(`${process.env.API_URL}/topics?id=${params.id}`).then(resp => resp.json());

    return (
        <>
            <div className={`mb-5 border border-blue-300 p-2`}>
                {det?.map(item => (
                    <div key={item.id}>
                        <span>title: {item.title}</span>
                        <p> body: {item.body}</p>
                    </div>
                ))}
            </div>
            <div className={`flex justify-center gap-1`}>
                <Link href={`/api-mock`} className={`p-4 bg-blue-300 rounded`}>List</Link>
                <Link href={`/api-mock`} className={`p-4 bg-red-300 rounded`}>Delete</Link>
            </div>
        </>
    );
}