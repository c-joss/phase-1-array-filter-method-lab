function findMatching(arr,name) {
    return arr.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(arr,name) {
    return arr.filter((drivers) => drivers.toLowerCase().startsWith(name.toLowerCase()));
}

function matchName(arr,name) {
    return arr.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase());
}