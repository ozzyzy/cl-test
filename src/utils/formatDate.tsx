export function formatDate(date: Date): string {
	const nextMonth = (date.getMonth() + 1).toString();
	const currentDay = date.getDate().toString();

	const month = nextMonth.length < 2 ?  '0' + nextMonth : nextMonth;
	const day = currentDay.length < 2 ? '0' + currentDay : currentDay;
	const year = date.getFullYear();


	return [day, month, year].join('.');
}
