#!/usr/bin/env node --no-warnings

import fs from 'node:fs';
import { Readable } from 'node:stream';
import { ReadableStream } from 'stream/web';
import isFile from '@aibulat/isfile';
import { getArgs } from './util.js';

const { url, filename } = getArgs();

//check file exists
const fileExists = await isFile(filename);

if (!fileExists) {
    console.error(`file now found: ${filename}`);
    process.exit(1);
}

const fstream = fs.createReadStream(filename);
const stream = Readable.toWeb(fstream);

const res = await fetch(url, {
    method: 'POST',
    // @ts-ignore
    body: stream,
});

const ctype = res.headers.get('content-type');

const metadata = {
    url: res.url,
    statusCode: res.status,
    headers: Object.fromEntries(res.headers),
};

console.log(metadata);
console.log('\n');

if (ctype == 'application/json') {
    const out = await res.json();
    console.log(out);
}
//Not JSON
else {
    const out = await res.text();
    console.log(out);
}
