function gridSize(command) {
    let gridArray = command.split(" ");

    return[parseInt(gridArray[0]), parseInt(gridArray[1])]
}


function roverPosition(command){
    const parse = command.split(" ");

    return[parseInt(parse[0]), parseInt(parse[1]), parse[2]]
}

module.exports = {
    roverPosition,
    gridSize
}
