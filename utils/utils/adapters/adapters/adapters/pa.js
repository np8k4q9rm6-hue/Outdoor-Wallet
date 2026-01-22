import { withRetry, fetchJSON, fetchText } from '../utils/fetch.js';
import { toISO8601Z } from '../utils/parseDate.js';

export async function fetchPennsylvaniaEvents() {
  // https://www.pa.gov/agencies/pgc/huntingandtrapping/licenses-and-permits/special-hunt-applications

  const now = new Date();
  return [
    {
      title: 'Pennsylvania Elk Draw Deadline',
      date: toISO8601Z(new Date(Date.UTC(now.getUTCFullYear(), 5, 3, 23, 59, 0))), // Jun 3
      state: 'Pennsylvania',
      type: 'lottery',
      notes: 'Placeholder; replace with official source'
    }
  ];
}
