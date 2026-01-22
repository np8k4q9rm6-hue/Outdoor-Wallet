#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_PATH = resolve(__dirname, '..', 'state-events.json');

function iso8601(date) {
  // Ensure UTC with Z suffix and strip milliseconds for stability
  return new Date(date).toISOString().replace(/\.\d{3}Z$/, 'Z');
}

// TODO: Replace with real scraping/aggregation logic
async function generateEvents() {
  const now = new Date();
  const year = now.getUTCFullYear();

  return [
    {
      title: 'Elk Lottery Draw Deadline',
      date: iso8601(Date.UTC(year, 8, 15, 23, 59, 0)), // Sep 15, 23:59 UTC
      state: 'Colorado',
      type: 'lottery',
      notes: 'Apply online at cpw.state.co.us'
    },
    {
      title: 'Trout Stocking - Jefferson Lake',
      date: iso8601(Date.UTC(year, 3, 2, 15, 0, 0)), // Apr 2, 15:00 UTC
      state: 'Colorado',
      type: 'stocking',
      notes: '[Imported] Subject to weather'
    }
  ];
}

function validate(events) {
  for (const e of events) {
    if (typeof e.title !== 'string' || !e.title) throw new Error('Missing title');
    if (typeof e.date !== 'string' || !e.date.endsWith('Z')) throw new Error('Date must be ISO8601 UTC (Z)');
    if (typeof e.state !== 'string' || !e.state) throw new Error('Missing state');
    if (!['lottery', 'stocking'].includes(e.type)) throw new Error('Invalid type');
  }
}

async function main() {
  const events = await generateEvents();
  validate(events);
  await writeFile(OUTPUT_PATH, JSON.stringify(events, null, 2) + '\n', 'utf-8');
  console.log(`Wrote ${OUTPUT_PATH} with ${events.length} events`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
