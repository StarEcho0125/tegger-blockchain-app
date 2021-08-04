import React from 'react';
import CryptoTable from '../components/CryptoTable';
import Header from '../layouts/Header';

const Home = () => {
	return (
		<>
			<Header />
			<div className="container">
				<CryptoTable />
			</div>
		</>
	)
}

export default Home;