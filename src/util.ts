import { parseArgs, ParseArgsConfig } from 'node:util';

export function getArgs() {
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
