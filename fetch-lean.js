function fetch_add_params(p_params_as_json) {
	var l_esc = encodeURIComponent;
	var l_retval = Object.keys(p_params_as_json)
		.map(k => l_esc(k) + '=' + l_esc(p_params_as_json[k]))
		.join('&');
	return l_retval
}

const fetchLean = (p_method, p_uri, /* istanbul ignore next */ p_extra_headers = {}, /* istanbul ignore next */ p_body = {},) => new Promise(async (resolve, reject) => {
	let l_uri = p_uri;
	let l_headers = Object.assign({ Accept: 'application/json', 'Content-Type': 'application/json', }, p_extra_headers);
	let l_init = { method: p_method, headers: l_headers, }
	/* istanbul ignore if */ 
	if (p_method === "POST") l_init.body = JSON.stringify(p_body);
	else l_uri += "?" + fetch_add_params(p_body);
	try {
		let l_response = await fetch(l_uri, l_init);
		let l_json = await l_response.json();
		return resolve(l_json);
	} catch (error)  /* istanbul ignore next */ {
		return reject(error)
	}
});

module.exports = fetchLean;
