const key = process.env.API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
};

async function getMovie() {
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then(response => response.json());

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