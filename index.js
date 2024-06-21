let scores = {
    home: 0, 
    guest: 0
};

function update(team,points) {
    let element = document.getElementById(team);
    if (element){
        scores[team]+= points;
        element.textContent = scores[team];
    } else {
        console.error(`Element ${team} not found`)
    }
}

function newg() {
    scores.home=0;
    scores.guest=0;
    document.getElementById('home').textContent=scores.home;
    document.getElementById('guest').textContent=scores.guest;
}

function updateLead() {
    let homescore= scores.home;
    let guestscore = scores.guest
    let homeElement = document.getElementById('home');
    let guestElement = document.getElementById('guest');
    if(homescore>guestscore) {
        homeElement.classList.add('leading');
        guestElement.classList.remove('leading');
    } else if(homescore<guestscore) {
        homeElement.classList.remove('leading');
        guestElement.classList.add('leading');
    } else {
        homeElement.classList.add('leading');
        guestElement.classList.add('leading');
    }
}