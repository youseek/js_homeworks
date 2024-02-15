'use strict'

const parseUrl = function (url) {
  const parser = new URL(url)

  return {
    protocol: parser.protocol,
    host: parser.hostname,
    port: parser.port,
    path: parser.pathname,
    query: parser.search,
    hash: parser.hash,
    origin: parser.origin
  }
}

console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'))
