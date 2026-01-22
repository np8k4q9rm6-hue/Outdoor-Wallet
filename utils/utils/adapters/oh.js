import { withRetry, fetchJSON, fetchText } from '../utils/fetch.js';
import { toISO8601Z } from '../utils/parseDate.js';

export async function fetchOhioEvents() {
  // TODO: Replace with Ohio’s real source.
  // Example if JSON exists:
  // const url = 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/hunting-resources/controlled-hunting-trapping';
  // const data = await withRetry(() => fetchJSON(url));
  // return data.items.map(mapOhioItem);

  // Temporary placeholder structure to keep pipeline working:
  const now = new Date();
  return [
    {
      title: 'Ohio Deer Lottery Deadline',
      date: toISO8601Z(new Date(Date.UTC(now.getUTCFullYear(), 6, 15, 23, 59, 0))), // Jul 15
      state: 'Ohio',
      type: 'lottery',
      notes: 'Placeholder; replace with official source'
    }
  ];
}

// Example mapper if Ohio provides different keys:
// function mapOhioItem(item) {
//   return {
//     title: item.title,
//     date: toISO8601Z(item.deadline || item.date),
//     state: 'Ohio',
//     type: (item.category === 'stocking') ? 'stocking' : 'lottery',
//     notes: item.notes || ''
//   };
// }
