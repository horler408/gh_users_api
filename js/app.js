//DOM Manipulation
const container = document.querySelector('.user_container');
const showBtn = document.querySelector('.show-btn')

const baseUrl = `https://api.github.com/users`

function append(parent, el) {
    return parent.appendChild(el);
}

const getRequest = () => {
	fetch(baseUrl)
	.then(response => response.json())
	.then(users => {
		console.log(users)

		users.map(user => {
			showBtn.addEventListener('click', () => {
				const ul = document.createElement('ul')
				const li = document.createElement('li')

				li.innerHTML = user.login

				append(ul, li)
				append(container, ul)
			})
		})
	})
}

getRequest()