import { withRetry, fetchJSON, fetchText } from '../utils/fetch.js';
import { toISO8601Z } from '../utils/parseDate.js';

export async function fetchMichiganEvents() {
  // https://www.michigan.gov/dnr/things-to-do/hunting/deer/reserved-deer-hunts.
  // Example: ICS/CSV/JSON. Use appropriate parser and map.

  const now = new Date();
  return [
    {
      title: 'Michigan Elk Application Deadline',
      date: toISO8601Z(new Date(Date.UTC(now.getUTCFullYear(), 4, 31, 23, 59, 0))), // May 31
      state: 'Michigan',
      type: 'lottery',
      notes: 'Placeholder; replace with official source'
    }
  ];
}
