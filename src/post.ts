#!/usr/bin/env node --no-warnings

import { getPostPutArgs, showOutput, getFStream } from './util.js';

const { url, filename } = getPostPutArgs();

const stream = getFStream(filename);

const res = await fetch(url, {
    method: 'POST',
    // @ts-ignore
    body: stream,
});

showOutput(res);
