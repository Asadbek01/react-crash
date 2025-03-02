// import './App.css';
import Footer from './components/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar';
import Home from './pages/Home';

function App() {
	return (
		<>
			<BrowserRouter>
				{/* <MyNavbar /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/blog' element={<Footer />} />
					{/*  */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
