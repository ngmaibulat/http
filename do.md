# To do

## Open

- show upload progress — needs a streaming request body wrapped in a counting
  `TransformStream`, which requires `duplex: 'half'`. That forfeits `Content-Length` in
  favour of chunked encoding and makes the body unreplayable across redirects, so it is
  parked behind a future `--upload-progress` flag. Download progress already works.
- nested body keys (`user[name]=x`), if anyone asks for them.

## Done in 0.1.0

- read from stdin when no file is given
- allow inserting headers (`Name:value`)
- allow positional args: `get <url>`
- show how much time the request took, in ms (`-p m` / `--verbose`, printed to stderr)
- basic tests via `node --test` — against a local `node:http` fixture rather than
  httpbin, which was down during development and would make the suite flaky
- GitHub Actions: CI matrix plus npm publish on tag

## Closed differently

- ~~send in headers: filename, size, type, lastModified~~ — multipart `field@file` already
  transmits the filename and MIME type natively, and `--file` sends a real
  `Content-Length`. Inventing `X-File-*` headers would be non-standard and no server
  expects them. Reopen only if something concrete needs it.
