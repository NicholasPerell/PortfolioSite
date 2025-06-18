
export const convertDate = (published: string): string => {
    const months: string[] = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    const date = published.substring(0, 10);
    const [year, month, day] = date.split('-');
    return `${day}-${months[parseInt(month)]}-${year}`;
};