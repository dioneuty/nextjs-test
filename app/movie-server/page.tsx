
async function getMovie() {
    const data = await fetch(process.env.PUB_URL + '/movie/api/list').then(response => response.json());

    return data;
}

export default async function movie() {
    let mode = true;

    const {results} = await getMovie();

    return (
        <div>
            <p>movie</p>
            {results.map((movie:{id:number, original_title:string}) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}