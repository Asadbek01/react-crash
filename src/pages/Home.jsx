import React, { useState } from 'react';
import Header from '../components/header';

function Home() {
	const [data, setdata] = useState([
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://via.placeholder.com/600/92c952',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
		{
			albumId: 1,
			id: 2,
			title: 'reprehenderit est deserunt velit ipsam',
			url: 'https://via.placeholder.com/600/771796',
			thumbnailUrl: 'https://via.placeholder.com/150/771796',
		},
		{
			albumId: 1,
			id: 3,
			title: 'officia porro iure quia iusto qui ipsa ut modi',
			url: 'https://via.placeholder.com/600/24f355',
			thumbnailUrl: 'https://via.placeholder.com/150/24f355',
		},
		{
			albumId: 1,
			id: 4,
			title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
			url: 'https://via.placeholder.com/600/d32776',
			thumbnailUrl: 'https://via.placeholder.com/150/d32776',
		},
		{
			albumId: 1,
			id: 5,
			title: 'natus nisi omnis corporis facere molestiae rerum in',
			url: 'https://via.placeholder.com/600/f66b97',
			thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
		},
		{
			albumId: 1,
			id: 6,
			title: 'accusamus ea aliquid et amet sequi nemo',
			url: 'https://via.placeholder.com/600/56a8c2',
			thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
		},
		{
			albumId: 1,
			id: 7,
			title: 'officia delectus consequatur vero aut veniam explicabo molestias',
			url: 'https://via.placeholder.com/600/b0f7cc',
			thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
		},
		{
			albumId: 1,
			id: 8,
			title: 'aut porro officiis laborum odit ea laudantium corporis',
			url: 'https://media.istockphoto.com/id/1993983703/photo/themis-statue-of-justice-law-legal-system-justice-crime-concept-3d-render.jpg?s=2048x2048&w=is&k=20&c=BkvA1H0lkn-3iF1LVrzdIamPpMyyJy4Zr7e34obVnfg=',
			thumbnailUrl: 'https://via.placeholder.com/150/54176f',
		},
	]);

	console.log('Coming from Hooks', data);

	return (
		<>
			{/* <Header /> */}
			<>
				{data ? (
					data.map(item => {
						return (
							<>
								<div className='card-container'>
									{data.map(element => {
										return <></>;
									})}
								</div>
							</>
						);
					})
				) : (
					<div> Topilmadi </div>
				)}
			</>
		</>
	);
}

// componentlar 2 xil function yaratiladi

// functional Component
// class Component //

export default Home;
