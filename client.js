console.log('Here are all the available people:', people);

$(readyNow); 
let generatedName;
// readyNow function that is called after HTML has loaded.
function readyNow() {
    // console.log('ready now');
    for(let person of people) {
        $('#game-container').append(`
            <img class="profile-picture data-${person.name}"src="${person.image}">
        `)
    };
    generatedName = generateName(people);
    clickPerson();
    $('body').on('click', '.profile-picture', checkMatch);
};

function generateName(array) {
    // console.log(array[randomNumber((array.length - array.length), (array.length - 1))].name);
    
    // OR

    let randomName = randomNumber(0, (array.length - 1));
    // console.log(array[generatedName].name);
    return (array[randomName].name);
};

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};

function clickPerson() {
    $('#click-person').text(`
        Click on: ${generatedName}
    `)
};


function checkMatch() {
    // console.log('in checkMatch');
    let personIndex = $('.profile-picture').index(this);
    // console.log(personIndex);
    let personName = people[personIndex].name;
    console.log('This is where I clicked', personName);
    console.log('This name was generated', generatedName);
    
    if(generatedName === personName) {
        // console.log('Match!');
        alert('You got the match! Reload page to try again!');
    } else {
        // console.log('No Match!');
        alert('You picked the wrong person, try again!');
    };
};
