import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function Profile({ currentUser, setCurrentUser, handleLogout }) {
	// state for the secret message (aka user privilaged data)
	const [msg, setMsg] = useState('')
	const [userCats, setUserCats] = useState([])

	const { id } = useParams()
	const navigate = useNavigate

	// useEffect for getting the user data and checking auth
	useEffect(() => {
		const fetchData = async () => {
			try {
				// get the token from local storage
				const token = localStorage.getItem('jwt')
				// make the auth headers
				const options = {
					headers: {
						'Authorization': token
					}
				}
				
				// hit the auth locked endpoint
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
				// example POST with auth headers (options are always last argument)
				// await axios.post(url, requestBody (form data), options)
				// set the secret user message in state
				setMsg(response.data.msg)
			} catch (err) {
				// if the error is a 401 -- that means that auth failed
				console.warn(err)
				if (err.response) {
					if (err.response.status === 401) {
						// panic!
						handleLogout()
					}
				}
			}
		}
		fetchData()
		// console.log(localStorage)
		const getUsers = async () => {
			try{
				// console.log(currentUser.cats)
				
			}catch(err){
				console.warn(err)
				if(err.response){
					if(err.response){
						setMsg(err.response.data.message)
					}
				}
			}
		}
		getUsers()

		setUserCats(currentUser.cats)
	},[])
	const handleDelete = async (id) => {
		try{
			console.log(id)
			const token = localStorage.getItem('jwt')
			//decoding jwt to send user ID to back end (decoded.id)
			const decoded = jwt_decode(token)
			let userId = decoded.id
			// let catId = id
			//send delete to backend: line 71 to User, line 72 to Cat
			await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/cats/id`, {data: {userId, id} } )
			await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/cats/cat`, {data: {id} } )
			//find the index where ids match
			const findIndex = currentUser.cats.findIndex(cat => cat._id === id)
			let newCatArray = [...currentUser.cats]
			//cut the cat out of the array
			newCatArray.splice(findIndex, 1)
			const thisUser = {...currentUser}
			thisUser.cats = newCatArray
			setCurrentUser(thisUser)
			setUserCats(newCatArray)
			// navigate('/profile')
		}catch(err){
			console.log(err)
			// setMsg(err.response.data.message)
		}
	}

	const reversedCats = currentUser.cats.reverse()
	const showCats = reversedCats.map(cat => {
			// const catComment = cat.comments.map(comment =>{
			// 	<p>{comment}</p>
			// })
			console.log('MAP OUT CATS',cat)
		return(
		<div key={cat._id} className='flex items-center flex-col justify-center'>
			<h3 className='text-xl font-bold'>{cat.header}</h3>
			<img className='rounded-3xl border-4 border-black' src={cat.img_Url} alt="a cute kitty"/>
			<p>{cat.content}</p>
			{/* <p>{catComment}</p> */}
			{/* <br/> */}
			<button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold py-2 px-4 mt-2 rounded-full" id={cat._id} onClick={() => handleDelete(`${cat._id}`)}>Delete from Favorites</button>
			<br></br>
			<br></br>
		</div>
		)
	})

	return (
		<div>
			<br></br>
			<br></br>
			<h1 className='text-3xl font-medium font-serif mt-20'>Hola, {currentUser.name}!</h1>
			<p> Gracias por registrarte. Disfruta compartiendo su(s) gato(s) con otros amantes de los gatos..</p>
			<br></br>
			<br></br>
			<div className='buttonContainer'>
				<Link to='/profile/account' >
					<button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold py-2 px-4 rounded-full">
						Configuración de la cuenta
					</button>
				</Link>
				<Link to='/cats' >
					<button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold py-2 px-4 ml-16 rounded-full">
						Meow haz clic aqui para agregar mas comentarios!
					</button>
				</Link>
			</div>

			<h3>{msg}</h3>

			{showCats}
		</div>
	)
}