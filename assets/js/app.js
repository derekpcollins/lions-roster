const container = document.getElementById('roster-container');

const createCard = (data) => {
	
	let card = document.createElement('div');
	card.classList.add('card');
	
	let number = document.createElement('span');
	number.classList.add('number');
	number.innerHTML = data.number;
	card.appendChild(number);
	
	let position = document.createElement('span');
	position.classList.add('position');
	position.innerHTML = data.position;
	card.appendChild(position);
	
	let name = document.createElement('span');
	name.classList.add('name');
	name.innerHTML = data.name;
	card.appendChild(name);
	
	let imageName = (data.name).split(' ').join('-');
	let image = document.createElement('img');
	image.setAttribute('loading', 'lazy');
	image.src = 'assets/img/players/' + imageName + '.png';
	image.height = 80;
	image.width = 80;
	card.appendChild(image);
	
	return card;
}

const showRoster = (obj) => {
	container.innerHTML = '';
	// Loop over the players array
	// See data/2021.js
	for(const player of players) {
		let card;
		if(player.status === obj.status && player.side === obj.side) {
			card = createCard(player);
			container.appendChild(card);
		}
	}
}

// Handle clicks on nav
const optionsList = document.getElementById('options-list');
optionsList.addEventListener('click', (event) => {
	const side = event.target.getAttribute('data-side');
	showRoster({status: 'ACT', side: side.toString()});
	
	// Remove currently active class
	const currentActive = optionsList.getElementsByClassName('active')[0];
	currentActive.classList.remove('active');
	
	// Add new active class
	const newActive = event.target.classList.add('active');
});


// Initial load
showRoster({status: 'ACT', side: 'OFF'});
