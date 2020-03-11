// Use an array of objects to look up the different characters from th HP movies. 
//Challenge: 
// 1: use html to receive input and display output
// 2: the html should have an input for the character's name and a dropdown menu for their likes and dislikes
// 3: The user will type in Character's name and select likes/dislikes from the dropdown menu.
// 4: Have a button, that once pressed, will calculate the correct response and diplay it in my html.
// 5: Have a lookup function that takes in a firstname and property (prop). The function should check if the name is in the list of characters. If BOTH are true, then return both the character and that property. If there is no so such char or property, then notify that those are not correct.

'use strict';

let likes = ["Alex", "Hogwarts", "Magic", "Hagrid", "Voldemort", "Moaning Myrtle", "Dementors"];

// Populate the likes dropdown:
for (let i = 0; i < likes.length; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(likes[i]);
    option.appendChild(optionText);
    document.getElementById("likeSelect").appendChild(option);
}

let newCharacter = {
    firstName: 'string',
    lastName: 'string',
    likes: [''],
    dislikes: ['']
}


let characters = [
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "likes": ["Hogwarts", "Magic", "Hagrid"],
        "dislikes": ["Voldemort", "Moaning Myrtle", "Dementors"],
    },
    {
        "firstName": "Hermione",
        "lastName": "Granger",
        "likes": ["Hogwarts", "Magic", "Ron"],
        "dislikes": ["Voldemort", "Harry", "Dementors"],
    },
    {
        "firstName": "Albus",
        "lastName": "Dumbledoor",
        "likes": ["Hogwarts", "Magic", "Harry"],
        "dislikes": ["Voldemort", "Moaning Myrtle", "Dementors"],
    },
    {
        "firstName": "Lord",
        "lastName": "Voldemort",
        "likes": ["Voldemort", "Moaning Myrtle", "Dementors"],
        "dislikes": ["Hogwarts", "Mudbloods", "Harry"],
    }
//add at least 3 other harry potter characters here
];

// Lookup function:
document.getElementById("searchCharacterBtn").addEventListener("click", function ( name, prop) {
    var found = false;
    for (let i = 0; i < characters.length; i++) {
        if(characters[i].firstName == "Lord"){
            found = true;
        }
    }
    if(found){
        alert("Voldemort Found");
    }
    else{
        alert("Not found");
    }
});


document.getElementById("addCharacter").addEventListener("click", function() {
    newCharacter = {
        "firstName": document.forms["harryForm"]["firstName"].value,
        "lastName": document.forms["harryForm"]["lastName"].value,
        "likes": ["New"],
        "dislikes": ["Char"]
    };
    characters.push(newCharacter);
    console.dir(characters);
});

document.getElementById("showAll").addEventListener("click", function() {
    alert(print(characters));
});

// Function printing out all characters:
function print(chars) {
    let names = chars[0].firstName;
    for (let i = 1; i < chars.length; i++) {
        names += '\n' + chars[i].firstName;
    }
    return names;
}




/*

function addCharacter() {
    let newCharacter = {
        "firstName": document.forms["harryForm"]["firstName"].value,
        "lastName": document.forms["harryForm"]["lastName"].value,
        "likes": ["New"],
        "dislikes": ["Char"]
    };
    console.log(newCharacter);
    characters.push(newCharacter);
}

function showAll() {
    alert(characters[4].firstName);
}

*/