#!/usr/bin/env node --no-warnings

import { getArgs, showOutput, getFStream } from './util.js';

const { url } = getArgs('get');

const res = await fetch(url, {
    method: 'DELETE',
});

showOutput(res);
