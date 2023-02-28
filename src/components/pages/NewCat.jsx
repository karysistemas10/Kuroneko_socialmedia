import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

export default function NewCat({currentUser}){
    const [ cat, setCat ] = useState({
        header: '',
        img_Url: '',
        content: '',
        userId: '',
    })
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getUser = async () => {
            try {
                const decodedoken = jwt_decode(localStorage.getItem('jwt'))


                //Passed in the userid from the decoded token
                // response.data["userId"] = decodedoken.id;
                // console.log('response.data:', response.data);
                // console.log('decodeoken.id', decodedoken.id);


                setCat({...cat, userId: decodedoken.id})       
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }                
            }
        }
        getUser()
    }, [])

    const navigate = useNavigate()
    console.log(cat)
    const handleSubmit = async e => {
        try{
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/cats/new`, cat)
            // navigate back to cats
            
            navigate('/feed')
        }catch(err) {
            console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
        }
    }

    const catForm = (
        <div className='md:flex md:justify-center m-10'>
            <p>{errorMessage}</p>

            <div className="w-full max-w-xs object-center">
                <form 
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                    >
                    <p className='text-3xl font-bold mb-10'>Agregar a un nuevo gato</p>
                    <div className='mb-4'>
                        <label 
                            className="block text-gray-700 text-sm font-bold mb-2" 
                            htmlFor='header'
                        >
                            El nombre de tu gato es:
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='text' 
                            id='header' 
                            value={cat.header}
                            placeholder="Mister Snuggles"
                            onChange={e => setCat({...cat, header: e.target.value})}></input>
                    </div>

                    <div className='mb-4'>
                        <label 
                            className="block text-gray-700 text-sm font-bold mb-2" 
                            htmlFor='img_Url'
                        >
                            URL de la imagen:
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type='text' 
                        id='img_Url' 
                        value={cat.img_Url}
                        placeholder='Agrega una imagen URL valida' 
                        onChange={e => setCat({...cat, img_Url: e.target.value})}></input>
                    </div>
                    <div className='mb-4'>
                        <label 
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor='content'
                        >
                            Descripcición:
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type='text' 
                        id='content' 
                        value={cat.content}
                        placeholder='Describe a tu gatito...' 
                        onChange={e => setCat({...cat, content: e.target.value})}></input>
                    </div>
                    <button type='submit' className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold py-2 px-4 rounded-full">Añadir</button>
                </form>
            </div>
        </div>
    )

    const loginMessage = (
        <div>
            <p className='text-3xl font-bold mt-20'>Inicia sesion para agregar a un Gatito 👀!</p>
            <Link to='/login'>
                <button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white mt-20 font-bold py-2 px-4 rounded-full">
                    Acceder
                </button>
            </Link>
        </div>
    )

    return(
        <div className='md:flex md:justify-center m-10'>
            <p>{errorMessage}</p>
            {currentUser ? catForm : loginMessage}
        </div>
    )
}