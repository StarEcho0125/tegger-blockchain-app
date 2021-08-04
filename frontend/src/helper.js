export const getTimeString = (timestamp) => {
	let date = new Date(timestamp);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	return `${year}-${month}-${day}`;
}