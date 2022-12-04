function fetch_add_params(p_params_as_json) {
	var l_esc = encodeURIComponent;
	var l_retval = Object.keys(p_params_as_json)
		.map(k => l_esc(k) + '=' + l_esc(p_params_as_json[k]))
		.join('&');
	return l_retval
}

const fetchLean = (p_method, p_uri, /* istanbul ignore next */ p_extra_headers = {}, /* istanbul ignore next */ p_body = {}, p_retrieveStatus = false) => new Promise(async (resolve, reject) => {
	let l_method = p_method.toUpperCase();
	let l_uri = p_uri;
	let l_headers = Object.assign({ Accept: 'application/json', 'Content-Type': 'application/json', }, p_extra_headers);
	let l_init = { method: l_method, headers: l_headers, }
	/* istanbul ignore if */
	if (l_method === "POST") l_init.body = JSON.stringify(p_body);
	else l_uri += "?" + fetch_add_params(p_body);
	try {
		let l_response = await fetch(l_uri, l_init);
		try {
			let l_response_json = await l_response.json();
			if (p_retrieveStatus) l_response_json.status = l_response.status;
			return resolve(l_response_json);
		} catch (error) {
			return resolve(l_response);
		}
	} catch (error)  /* istanbul ignore next */ {
		return reject(error)
	}
});

module.exports = fetchLean;
