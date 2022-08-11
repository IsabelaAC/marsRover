// Criação do platô, do Rover e grid.

module.exports = class Mars {

    constructor(coordX, coordY){
        this.X = coordX
        this.Y = coordY
        this.grid = Array()
        this.rovers = new Map()
        this.formatMars()
    }


    formatMars(){
        const xArray = new Array(this.X)

        for(let i = 0; i < this.Y; i++){
            this.grid[1] = xArray.slice(0)
        }
    }


    addRover(rover){

        this.rover.set(rover.name, rover);
        this.attGrid(rover.name, rover.position[0], rover.position[1]);
    }


    attGrid(roverName, x, y){

        for(let i = 0; i < this.X; i++){
            for (let j = 0; j < this.Y; j++){
                if( this.grid[i][j] === roverName){
                    this.grid[i][j] = " ";
                }
            }
        }
    this.grid[(this.Y - y)][x - 1] = roverName

    }

    start() {
        this.rovers.array.forEach(rover => {
            rover.runMission()
        });

    }
}
