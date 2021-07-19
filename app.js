
/*Let's imagine we're recieving this from a server*/
let navData = [["Upcoming Shows", ["Chicago 2021","Fort Lauderdale 2021","Colombia 2022","Chicago 2022"]]];
/*All right. Let's create the nav*/

const createMainNav = array => {
	let navSection = document.createElement('DIV');
	navSection.classList.add('navBackground');
	navSection.classList.add('toggle');
	navSection.setAttribute('id','nav__menu')


	let closeNav = document.createElement('I');
	closeNav.classList.add('fas','navIcon');
	closeNav.classList.add('fa-times');
	closeNav.setAttribute('id','mainCloseButton')
	navSection.appendChild(closeNav);


	for (let i = 0; i < array.length; i++) {

	let navDivition = document.createElement('A'),
		navDivitionText = document.createElement('P'),
		openNewSection = document.createElement('I');

		if (i == 0) {
			navDivition.classList.add('navFirstElement')
		}

		navDivitionText.innerHTML = array[i][0];
		navDivitionText.classList.add(`navText`);
		navDivition.appendChild(navDivitionText);

		openNewSection.classList.add('fas');
		openNewSection.classList.add('fa-chevron-right','navIcon','navElement__Arrow');
		navDivition.setAttribute('id',`mainNavArrow${i}`);
		navDivition.appendChild(openNewSection);

		navDivition.setAttribute('href','#');
		navDivition.classList.add('navElement');
		navSection.appendChild(navDivition);
	};

	documentFragment.appendChild(navSection);
	navBar.appendChild(documentFragment);	
};

const createLinkArrow = () => {
	let arrow = document.createElement('I');
	arrow.classList.add('fas');
	arrow.classList.add('fa-chevron-right');
	arrow.classList.add('navIcon');
	return arrow
}
const createEventsNavigation = array => {
	let navSection = document.createElement('DIV');
	navSection.classList.add('navBackground');
	navSection.classList.add('toggle');
	navSection.setAttribute('id','eventsTab');

	let goBack = document.createElement('I');
	goBack.classList.add('fas');
	goBack.classList.add('fa-chevron-right','goBack');
	goBack.classList.add('navIcon');
	goBack.setAttribute('id','eventsTab-back')
	navSection.appendChild(goBack);


	let closeNav = document.createElement('I');
	closeNav.classList.add('fas');
	closeNav.classList.add('fa-times','navIcon');
	closeNav.setAttribute('id','eventsCloseButton')
	navSection.appendChild(closeNav);

	for (let i = 0; i < array.length; i++) {

	let navDivition = document.createElement('A'),
		navDivitionText = document.createElement('P'),
		openNewSection = document.createElement('I');
		navDivition.classList.add('navElement');

		if (i == 0) {
			navDivition.classList.add('navFirstElement')
		}

		navDivitionText.innerHTML = array[i];
		navDivitionText.classList.add(`navText`);
		navDivition.appendChild(navDivitionText);
		navDivition.setAttribute('id',`eventsNavArrow${i}`);


		openNewSection.classList.add('fas');
		openNewSection.classList.add('fa-chevron-right','navIcon','navElement__Arrow');
		navDivition.appendChild(openNewSection);

		navDivition.setAttribute('href','#');
		navSection.appendChild(navDivition);
	};

	documentFragment.appendChild(navSection);
	navBar.appendChild(documentFragment);	
}
const createEvents = array => {
	for (let i = 0; i < array.length; i++) {

	let navSection = document.createElement('DIV');
	navSection.classList.add('navBackground');
	navSection.classList.add('toggle');
	navSection.setAttribute('id',`event${i}`)

	let goBack = document.createElement('I');
	goBack.classList.add('fas');
	goBack.classList.add('fa-chevron-right','goBack');
	goBack.classList.add('navIcon');
	goBack.setAttribute('id',`eventBack${i}`)
	navSection.appendChild(goBack);

	let closeNav = document.createElement('I');
	closeNav.classList.add('fas');
	closeNav.classList.add('fa-times');
	closeNav.classList.add('navIcon');
	closeNav.setAttribute('id',`eventCloseButton${i}`)
	navSection.appendChild(closeNav);

	let whyLink = document.createElement('A'),
		why = document.createElement('P');

	why.innerHTML = `Why${array[i].slice(0,-4)}`;
	why.classList.add(`navText`);

	
	whyLink.appendChild(why);
	whyLink.setAttribute('href','#');
	whyLink.classList.add('navElement','navFirstElement');
	navSection.appendChild(whyLink);

	let exhibitors = document.createElement('P'),
		exhibitorsLink = document.createElement('A');

	exhibitors.innerHTML = 'Exhibitors List';
	exhibitors.classList.add(`navText`);


	exhibitorsLink.appendChild(exhibitors);
	exhibitorsLink.setAttribute('href','#');
	exhibitorsLink.classList.add('navElement');
	navSection.appendChild(exhibitorsLink);

	let sponsors = document.createElement('P'),
		sponsorsLink = document.createElement('A');

	sponsors.innerHTML = 'Sponsors Showcase';
	sponsors.classList.add(`navText`);

	sponsorsLink.appendChild(sponsors);
	sponsorsLink.setAttribute('href','#');
	sponsorsLink.classList.add('navElement');
	navSection.appendChild(sponsorsLink);

	let floor = document.createElement('P'),
		floorLink = document.createElement('A');

	floor.innerHTML = 'Floor Plan';
	floor.classList.add(`navText`);

	floorLink.appendChild(floor);
	floorLink.setAttribute('href','#');
	floorLink.classList.add('navElement');
	navSection.appendChild(floorLink);

	let tickets = document.createElement('P'),
		ticketsLink = document.createElement('A');

	tickets.innerHTML = 'Tickets';
	tickets.classList.add(`navText`);

	ticketsLink.appendChild(tickets);
	ticketsLink.setAttribute('href','#');
	ticketsLink.classList.add('navElement');
	navSection.appendChild(ticketsLink);

	documentFragment.appendChild(navSection);
	navBar.appendChild(documentFragment);

	}
};

const toggle = element => {
	element.classList.toggle('toggle');
};
const closeNavMenu = array => {
	for (let i = 0; i < array.length; i++) {
		if (!array[i].classList.contains('toggle')) {
			toggle(array[i])
		} else {
			continue
		}
	}
}


let documentFragment = document.createDocumentFragment(),
	navBar = document.querySelector('.navigationBar');

createMainNav(navData);
createEventsNavigation(navData[0][1]);
createEvents(navData[0][1]);

let navMenu = document.getElementById('nav__menu'),
	navBarIcon = document.getElementById('openMenu'),
	mainNavArrow0 = document.getElementById('mainNavArrow0'),
	eventsTab = document.getElementById('eventsTab'),
	eventsTabBack = document.getElementById('eventsTab-back'),
	eventNavArrow0 = document.getElementById('eventsNavArrow0'),
	eventNavArrow1 = document.getElementById('eventsNavArrow1'),
	eventNavArrow2 = document.getElementById('eventsNavArrow2'),
	eventNavArrow3 = document.getElementById('eventsNavArrow3'),
	event0 = document.getElementById('event0'),
	event1 = document.getElementById('event1'),
	event2 = document.getElementById('event2'),
	event3 = document.getElementById('event3'),
	eventBack0 = document.getElementById('eventBack0'),
	eventBack1 = document.getElementById('eventBack1'),
	eventBack2 = document.getElementById('eventBack2'),
	eventBack3 = document.getElementById('eventBack3'),
	mainCloseButton = document.getElementById('mainCloseButton'),
	eventsCloseButton = document.getElementById('eventsCloseButton'),
	eventCloseButton0 = document.getElementById('eventCloseButton0'),
	eventCloseButton1 = document.getElementById('eventCloseButton1'),
	eventCloseButton2 = document.getElementById('eventCloseButton2'),
	eventCloseButton3 = document.getElementById('eventCloseButton3'),
	navTabs = [navMenu,eventsTab,event0,event1,event2,event3];

	navBarIcon.addEventListener('click', ()=> {
		toggle(navMenu);
	})
	mainNavArrow0.addEventListener('click',()=> {
		toggle(eventsTab);
	})
	eventsTabBack.addEventListener('click', ()=> {
		toggle(eventsTab)
	})
	eventNavArrow0.addEventListener('click', ()=> {
		toggle(event0)
	})
	eventNavArrow1.addEventListener('click', ()=> {
		toggle(event1)
	})
	eventNavArrow2.addEventListener('click', ()=> {
		toggle(event2)
	})
	eventNavArrow3.addEventListener('click', ()=> {
		toggle(event3)
	})

	eventBack0.addEventListener('click', ()=> {
		toggle(event0)
	})
	eventBack1.addEventListener('click', ()=> {
		toggle(event1)
	})
	eventBack2.addEventListener('click', ()=> {
		toggle(event2)
	})
	eventBack3.addEventListener('click', ()=> {
		toggle(event3)
	})	
	mainCloseButton.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	})	
	eventsCloseButton.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	});	
	eventCloseButton0.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	});	
	eventCloseButton1.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	});	
	eventCloseButton2.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	});	
	eventCloseButton3.addEventListener('click', ()=> {
		closeNavMenu(navTabs);
	});