### HTTP Client CLI

- currently: only post

### Install

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
