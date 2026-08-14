import { readFileSync } from 'node:fs';

// Resolves to the package root from both `src/` (tests) and `dist/` (published).
const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
    name: string;
    version: string;
};

export const NAME = manifest.name;
export const VERSION = manifest.version;
export const USER_AGENT = `${manifest.name}/${manifest.version}`;
