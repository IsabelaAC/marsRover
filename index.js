const fs = require('fs');
const { gridSize, roverPosition } = require('./components/analyzingGridSize');
const Mars = require('./components/mars')
const Rover = require('./components/rover')

// Validando comando de entrada 
if (process.argv.length != 3) { 
    console.error("Must supply input argument")
    process.exit(1);
};

const inputs = fs.readFileSync(process.argv[2], 'utf8');
const commands = inputs.split("\n");

const gs = gridSize(commands[0]);
console.log("The coordinates that are on the upper right are" + gs);
let mars = new Mars(gs[0],gs[1])

const rover1P = roverPosition(commands[1]);
let rover1 = new Rover("Rover 1", rover1P[0], rover1P[1], rover1P[2])
rover1.settingPath(commands[2])

const rover2P = roverPosition(commands[3]);
let rover2 = new Rover("Rover 2", rover2P[0], rover2P[1], rover2P[2])
rover2.settingPath(commands[4])

mars.addRover(rover1);
mars.addRover(rover2);
mars.start();

function gridSize(command){
    let gridArray = command.split(" ");
    return [parseInt(gridArray[0]),parseInt(gridArray[1])] 
}

function roverPosition(command){
    let P = command.split( " ");
    return [parseInt(P[0]),parseInt(P[1]), P[2]] 
}
