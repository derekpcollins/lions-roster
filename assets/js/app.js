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
	image.src = 'assets/img/' + imageName + '.png';
	image.height = 80;
	image.width = 80;
	card.appendChild(image);
	
	return card;
}

// Loop over the players array
// See data/2021.js
for(const player of players) {
	let card;
	if(player.status === 'ACT') {
		card = createCard(player);
		container.appendChild(card);
	}
}