import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
	Button,
	Form,
} from 'react-bootstrap';

import { getToken, getAddress } from './actions/auth';

const defaultForm = {
	address: '',
	signature: '',
}

const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.auth.token);
	const address = useSelector(state => state.auth.address);
	const [form, setForm] = useState(() => defaultForm);

	const getTokenInfo = useCallback(() => {
		dispatch(getToken());
	});

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		switch (name) {
			case 'address': {
				setForm({
					...form,
					address: value,
				});
				break;
			}
			case 'signature': {
				setForm({
					...form,
					signature: value,
				});
				break;
			}
			default: {
				break;
			}
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (token === '') {
			alert ('Please get token by clicking the Get Token button');
			return;
		} else {
			dispatch(getAddress({...form, nonce: token}));
		}
	}

	return (
		<div className="container">
			<div className="row mb-5">
				<div className="col-4">
					<Button onClick={getTokenInfo}>Get Token</Button>
				</div>
				<div className="col-2 align-items-center d-flex">
					<span>{token}</span>
				</div>
			</div>
			<div className="row">
				<Form>
					<Form.Group className="mb-4">
						<Form.Label>Address:</Form.Label>
						<Form.Control type="text" name="address" onChange={handleChange} placeholder="Enter your confirm address" />
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label>Signature:</Form.Label>
						<Form.Control type="text" name="signature" onChange={handleChange} placeholder="Enter your your wallet signature" />
					</Form.Group>
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						Submit
					</Button>
				</Form>
			</div>
			{ address !== '' ?
				<div className="row">
					<p>{`Your address confirmed: ${address}`}</p>
				</div> :
				''
			}
		</div>
	)
}

export default App;