const baseUrl = `https://api.github.com/users`

const getRequest = () => {
	fetch(baseUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
}

getRequest()