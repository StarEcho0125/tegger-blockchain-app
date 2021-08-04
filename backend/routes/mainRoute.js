const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/getAssetData', async (req, res) => {
	let result = await axios.request({
		method: 'get',
		url: `https://api.coincap.io/v2/assets?limit=20`,
		headers: {}
	})
	.catch(error => {
		console.log('error: ', error);
		return res.json({
			success: false,
			message: 'Internal server error.',
		});
	});

	if (result && result.data) {
		res.json({
			success: true,
			data: result.data,
		});
	} else {
		res.json({
			sucess: false,
			message: 'Internal server error.',
		});
	}
});

router.post('/getHistoryData', async (req, res) => {
	console.log('request body: ', req.body);
	let { id } = req.body;
	let result = await axios.request({
		method: 'get',
		url: `https://api.coincap.io/v2/assets/${id}/history?interval=d1&start=${new Date().getTime() - 24*60*60*1000*50}&end=${new Date().getTime()}`,
		headers: {}
	})
	.catch(error => {
		console.log('error: ', error);
		return res.json({
			success: false,
			message: 'Internal server error.',
		});
	});

	if (result && result.data) {
		res.json({
			success: true,
			data: result.data,
		});
	} else {
		res.json({
			sucess: false,
			message: 'Internal server error.',
		});
	}
});

module.exports = router;