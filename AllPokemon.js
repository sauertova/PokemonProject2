import { useState, use Effect } from "react";
import axios from "axios";
import Individual from "./Individual";

function AllPokemon (){
    const [pokemen, setPokemen] =
useState ([]);
    const [nextPage, setNextPage] =
useState(null);
    
    useEffect(() +> {
        try{
            const {date} = await
axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(data.results);
        setNextPage(data.next);
        } catch (err) {}
    };

    fetchPokemon();
    }, []);

    let loadMorePokemon = async () +> {
        try {
            let {data} = await
axios.get(nextPage);
        setNextPage(data.next);
        setPokemon((prevList) =>
[...prevList, ...data.results]);            
        } catch (err) {}
    };

    return (
        <>
           <button onClick={() =>
loadMorePokemon () }>Load More Pokemon</button>
           <div>
             {pokemen.map((individual) => (
                <div key={individual.name}>
                    <Individual url= {individual.url} />
                    </div>   
             ))}
           </div>
        </>
    );
}

export default AllPokemon;