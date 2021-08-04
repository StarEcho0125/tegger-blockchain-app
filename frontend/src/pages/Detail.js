import React, { useState, useEffect } from 'react';
import DetailChart from '../components/DetailChart';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../layouts/Header';

const Detail = () => {
	const { id } = useParams();
	const assetData = useSelector( state => state.main.assetData);
	const [ item, setItem ] = useState(() => null);

	useEffect(() => {
		for (let i=0; i<assetData.length; i++) {
			if (assetData[i].id === id) {
				setItem(assetData[i]);
			}
		}
	}, [ assetData ]);

	if (item) {
		return (
			<>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-12 mb-3">
							<h3>
								Name: {item.name}({item.symbol})
							</h3>
						</div>
						<div className="col-12">
							<DetailChart id={id} />
						</div>
					</div>
				</div>
			</>
		)
	} else {
		return null;
	}
}

export default Detail;