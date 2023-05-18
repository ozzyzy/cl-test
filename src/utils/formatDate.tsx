export function formatDate(date: Date): string {
		let month = (date.getMonth() + 1).toString();
		let day = date.getDate().toString();
		let year = date.getFullYear().toString();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [day, month, year].join('.');
}
