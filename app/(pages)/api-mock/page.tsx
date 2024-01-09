import Link from "next/link";


export default async function about() {
    const result = await fetch(process.env.NEXT_PUBLIC_API_URL + '/topics', {cache:'no-cache'}).then(resp=>resp.json());

    return (
        <div>
            {
                result.map(item =>
                    <Link href={`/api-mock/${item.id}`} key={item.id}>
                        <div className={`p-2 border border-gray-500 text-center`} >
                            title: {item.title}
                        </div>
                    </Link>
                )
            }
        </div>
    );
}