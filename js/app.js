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
				const a = document.createElement('a')
				const span = document.createElement('span')

				li.innerHTML = user.login
				const repos = user.repos_url
				span.innerHTML = repos

				a.setAttribute('href', 'repos')
				ul.setAttribute('class', 'links')
				li.setAttribute('class', 'link_item')

				
				append(li, a)
				append(ul, li)
				append(container, span)
				append(container, ul)
			})
		})
	})
}

getRequest()