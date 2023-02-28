import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cats() {

    const [cats, setCats] = useState([])

    useEffect(() =>{
        const getCats = async () => {
            try{
                const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
                // console.log(response.data)
                setCats(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getCats()
    },[])

    const showCats = cats.map(cat => {
        return(
            <div key={cat.id} className='flex items-center flex-col justify-center'>
                <Link to={`/cats/id/${cat.id}`}>
                <img className='rounded-3xl border-4 border-black'  width="500px" src={cat.url} alt="a very cute cat"/>
                </Link>
                <br></br>
            </div>
        )
    })
    return(
        <div>
            <h1 className="text-3xl font-medium font-serif mt-20 mb-4">Aqui te mostramos algunos gatitos 😺!</h1>
            <p className="mb-6">¡Elige tu gato favorito y agrégalo a tu perfil para compartirlo con todos!</p>
            {showCats}
        </div>
    )
}