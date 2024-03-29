An ultra-lightweight, pure javascript library which fetches HTTP requests with a standard API.

**NOTE:** Reqiuires `node -v` >= 18. Or can be used with `--experimental-fetch` flag for  `node -v` = 16.

## Installation

```
yarn add fetch-lean
```

## Usage

```javascript
const fetchLean = require('fetch-lean');

const test = async () => {
let getResp = await fetchLean('GET', 'http://localhost:8000/get-route', {parameter1: 'parameter 1 value', parameter2: 'parameter 2 value', }, true);
let postResp = await fetchLean('POST', 'http://localhost:8000/post-route', {parameter1: 'parameter 1 value', parameter2: 'parameter 2 value', }, false);
console.log(`GET response: ${JSON.stringify(getResp.data)}`);
console.log(`POST response: ${JSON.stringify(postResp.data)}`);
}
test();
```


## API


| Name  | Description |
|-------|-------------|
|p_method| HTTP method to use, possible values are 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'.|
|p_uri| API route, full URI to call|
|p_extra_headers| A JSON object to identify headers. The default is { Accept: 'application/json', 'Content-Type': 'application/json', } and any provided JSON object will be merged onto this one.|
|p_body| A JSON object to send the parameters. Only gor GET requests, these parameters are converted to URL query parameters, for others they are sent within the 'body' key.|
|p_retrieveStatus| The status code is not returned in successful calls. Set this parameter to `true` to get a `status` field in the response code. The field overrides if there exists another status field in the json, so be careful. Default is `false`.|


## License

The license is MIT and full text [here](LICENSE).

### Used Modules

None