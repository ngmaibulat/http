### HTTP Client CLI

- very basic and simple
- can be useful to test REST APIs, which are available without authentication
- currently do not have features like inserting custom headers
- separate command for http methods: get, post, put, delete

### Install

Use NodeJS 18 or later!

```bash
sudo npm i -g n
sudo n lts
node -v
```

```bash
npm i -g @aibulat/http
```

### Use

```bash
get -u https://httpbin.org/get
post -u <url> -f <filename>
post -u https://httpbin.org/post -f test.txt
put -u https://httpbin.org/put -f test.txt
delete -u https://httpbin.org/delete
```
