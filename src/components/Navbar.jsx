import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<section>
			{/* if the user is logged in... */}
			<Link to="/profile">
				Perfil
			</Link>
			<> | </>
			<Link to="/">
				<span onClick={handleLogout}>Logout</span>
			</Link>
			<> | </>
			
			
			
		</section>
	 )

	 const loggedOut = (
		<>
			{/* if the user is not logged in... */}
			<Link to="/register">
				Registro
					</Link>
			{' | '}
			<Link to="/login">
				Acceder
			</Link>
		</>
	 )

	return (
		// <div className='container'>
		<nav className='navbar fixed-top navbar-expand-xl bg-dark'>
			<div className='container'>
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}> Menu de michis</a>
				<li className="nav-item dropdown" >
					<ul className="dropdown-menu">
						<li className='dropdown-item'><Link to="/cats/new">Postea tu michi 😻 🐾</Link></li>
						<li className='dropdown-item'><Link to="/cats">Mira gatos al azar</Link></li>
						<li className='dropdown-item'><Link to="/feed">Cat Feed</Link></li>
						<li className='dropdown-item'><Link to="/about">Conoce al Team michi</Link></li>
					</ul>
				</li>
				<div  style={{color: 'white'}}>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className='nav-item'> {' | '}<Link to="/"> Página Principal</Link>{' | '}</li>
						
						<li className='nav-item'>{currentUser ? loggedIn : loggedOut}</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}