import React from 'react'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import "./styles/App.css"
import PageContent from './components/PageContent'


function App() {
	const [photos, setPhotos] = useState(null);
	const [categoryImages, setCategoryImages] = useState(
		null
	);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((data) => data.json())
			.then((data) => {
				setPhotos(data);
				setCategoryImages(data.slice(0, 50));
			})
	}, []);

	const setNewCategory = (categoryID) => {
console.log('cat', categoryID)
		if (categoryID === 'all') {

			setCategoryImages(photos.slice(0, 50));
		} else {
			setCategoryImages(photos.filter(photo => photo.albumId === categoryID));

		}
	}


	return (
		<div>
			<Header />
			{categoryImages && <PageContent images={categoryImages} setNewCategory={setNewCategory} />}
		</div>
	)

}

export default App