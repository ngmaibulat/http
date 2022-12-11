import { parseArgs, ParseArgsConfig } from 'node:util';
import fs from 'node:fs';
import { Readable } from 'node:stream';
import isFile from '@aibulat/isfile';

export function getPostPutArgs() {
    if (process.argv.length < 6) {
        console.error('example: post --url https://httpbin.org/post --filename test.txt');
        console.error('example: post -u https://httpbin.org/post -f test.txt');
        process.exit(1);
    }

    const cfg: ParseArgsConfig = {
        args: process.argv.slice(2),
        options: {
            url: {
                type: 'string',
                short: 'u',
                multiple: false,
            },
            filename: {
                type: 'string',
                short: 'f',
                multiple: false,
            },
        },
    };

    const parsed = parseArgs(cfg);

    const filename = parsed.values.filename as string;
    const url = parsed.values.url as string;

    return { url, filename };
}

export function getArgs(method: string) {
    if (process.argv.length < 4) {
        console.error(`example: ${method} --url https://httpbin.org/post`);
        console.error(`example: ${method} -u https://httpbin.org/post`);
        process.exit(1);
    }

    const cfg: ParseArgsConfig = {
        args: process.argv.slice(2),
        options: {
            url: {
                type: 'string',
                short: 'u',
                multiple: false,
            },
        },
    };

    const parsed = parseArgs(cfg);

    const url = parsed.values.url as string;

    return { url };
}

export async function showOutput(res: Response) {
    const ctype = res.headers.get('content-type');

    const metadata = {
        statusCode: res.status,
        url: res.url,
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
}

export async function getFStream(filename: string) {
    //check file exists
    const fileExists = await isFile(filename);

    if (!fileExists) {
        console.error(`file now found: ${filename}`);
        process.exit(1);
    }

    const fstream = fs.createReadStream(filename);
    const stream = Readable.toWeb(fstream);

    return stream;
}
