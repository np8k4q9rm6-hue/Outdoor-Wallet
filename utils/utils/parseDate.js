export function toISO8601Z(input) {
  // Accept Date, number (ms), or string variants; normalize to UTC Z, no millis
  const d = (input instanceof Date) ? input : new Date(input);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid date: ${String(input)}`);
  }
  return d.toISOString().replace(/\.\d{3}Z$/, 'Z');
}
