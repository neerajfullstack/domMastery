// get ref to element node object
let nodeAnchor = document.querySelector('a');

// craete props array to store property keys for element node object
let props = [];
// loop over element node oject geting all properties and methods
for(let key in nodeAnchor) {
    props.push(key);
}

// log alphabetically sorted list of properties and methods
console.log(props.sort())


