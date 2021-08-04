import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAssetData } from '../actions';

const CryptoTable = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const assetData = useSelector(state => state.main.assetData);
	const [ filterText, setFilterText ] = useState(() => '');
	const [ displayData, setDisplayData ] = useState(() => []);

	useEffect(() => {
		dispatch(getAssetData());
	}, []);

	useEffect(() => {
		let data = assetData.filter( ele => {
			return ele.name.toLowerCase().includes(filterText.toLowerCase());
		});
		setDisplayData(data);
	}, [ assetData, filterText ]);

	const handleFilter = (e) => {
		setFilterText(e.target.value);
	}

	const handleRowClick = (e) => {
		let id = '';
		if (e.target.tagName === 'TD') {
			id = e.target.parentElement.getAttribute('id');
		} else {
			id = e.target.getAttribute('id');
		}
		history.push(`/detail/${id}`);
	}

	return (
		<>
			<div className="row mb-3">
				<div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12"></div>
				<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
					<input type="text"
						className="form-control" 
						placeholder="Filter"
						onChange={handleFilter}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card card-scroll-rt">
						<div className="card-body p-0">
							<table className="table table-hover table-striped">
								<thead>
									<tr>
										<th scope="col">Rank</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">MarketCap</th>
										<th scope="col">VWAP(24Hr)</th>
										<th scope="col">Supply</th>
										<th scope="col">Volume(24Hr)</th>
									</tr>
								</thead>
								<tbody>
								{displayData.map( (ele, index) => {
									return (
										<tr key={index} id={ele.id} onClick={handleRowClick}>
											<td>{ele.rank}</td>
											<td>{ele.name}</td>
											<td>{parseFloat(ele.priceUsd).toFixed(2)}</td>
											<td>{parseFloat(ele.marketCapUsd).toFixed(2)}</td>
											<td>{parseFloat(ele.vwap24Hr).toFixed(2)}</td>
											<td>{parseFloat(ele.supply).toFixed(2)}</td>
											<td>{parseFloat(ele.volumeUsd24Hr).toFixed(2)}</td>
										</tr>
									)
								})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CryptoTable;