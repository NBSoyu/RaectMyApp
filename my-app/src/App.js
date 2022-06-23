import React from 'react'
import {nanoid} from 'nanoid'
import {Header} from './components/Header'
import "./styles/App.css"
import PageContent from './components/PageContent'


function App() {
	return (
	<div>
	<Header/>
	<PageContent/>
	</div>
)

}

export default App