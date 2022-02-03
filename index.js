
/*
const findMatching = (a,b) => a.filter(a => a.toLowerCase() === b.toLowerCase())

const fuzzyMatch = (a,b) => a.filter(a => a.charAt(0) === b.charAt(0))

const matchName = (a,b) => a.filter(a => a.name === b)

*/

function findMatching(drivers, str){
    return drivers.filter(names => names.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str){
    return drivers.filter(names=> names.slice(0, str.length).toLowerCase() === str.toLowerCase());
}

function matchName(drivers, str){
    return drivers.filter(n => n.name.toLowerCase() === str.toLowerCase());
}