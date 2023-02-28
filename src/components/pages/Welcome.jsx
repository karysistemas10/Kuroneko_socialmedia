import React from 'react';
import { Link } from 'react-router-dom'

export default function Welcome() {
	return (
		<div className='flex flex-col justify-items-center content-center items-center mx-auto w-1/2'>

			<div>
				<h1 className='text-3xl font-medium font-serif mt-20 mb-2'>Bienvenido a Kuroneko Social Media 😼🥳!</h1>
				<h3>Una aplicación  diseñada para que todos los entusiastas, amantes y no amantes de los gatos 🐈‍⬛ busquen, guarden y compartan imágenes de gatos.❣️💖 </h3>
			<br></br>
				<img className='rounded-3xl border-4 border-black mx-auto' 
				src="https://i.pinimg.com/originals/d5/ee/36/d5ee36a4809d2a69c5c4237bdab824cc.jpg"
				id="welcome_photo"
				alt="kitten"
				></img>
			<br></br>
				<p>““Los dueños de perros habrán notado que, si les das comida, agua, cobijo y cariño, pensarán que eres Dios. Mientras que los dueños de gatos se ven obligados a darse cuenta de que, si les das comida, agua y afecto, llegan a la conclusión de que son Dios”.
					<br></br> 🖊️ *Christopher Hitchens* 🙌🏻</p>

				<Link to={"./Login"}>
					<button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold py-2 px-4 mt-5 rounded-full">Click para acceder</button>
				</Link>

			</div>
		</div>
	)
}