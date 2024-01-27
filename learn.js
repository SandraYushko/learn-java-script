// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: ['Front', 'Back', 'DevOps']
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);



let selectElement = document.createElement('select');
let option0Element = document.createElement('option');
option0Element.append(info.technologies[0])

let option1Element = document.createElement('option');
option1Element.append(info.technologies[1])

let option2Element = document.createElement('option');
option2Element.append(info.technologies[2])
selectElement.append(option0Element, option1Element, option2Element)

document.body.append(selectElement);







