module.exports = class Rover {

    constructor(name, positionX, positonY, facing) {
      this.directions = ["N", "E", "S", "W"];
      this.position = [positionX, positonY];
      this.name = name;
      this.path = null;
      this.facing = facing;
    }

    settingPath(commands) {
      this.path = commands;
    }

    moveForward(command) {
      if (command == "M") {
        let coordinateX = this.position[0];
        let coordinateY = this.position[1];
        if (this.facing == "N") {
          coordinateY++;
        } else if (this.facing == "S") {
          coordinateY--;
        } else if (this.facing == "E") {
          coordinateX++;
        } else if (this.facing == "W") {
          coordinateX--;
        } else {
          alert("This command is not valid, please try again.");
        }
        const newPosition = [coordinateX, coordinateY];
        this.position = newPosition;
        console.log(this.position);
      }
    }

    runMission() {
      for (var i = 0; i < this.path.length; i++) {
        let command = this.path[i];
        if (command == "M") {
          this.moveForward(command);
          console.log(this.name + " is performing the movement.");
        } else if (command == "L" || command == "R") {
          this.turn(command);
          console.log(this.name + " is turning.");
        }
      }
      console.log(
        "I am " +
          this.name +
          " at position " +
          this.position +
          " facing " +
          this.facing
      );
    }

    turn(command) {
      var cardinalIndex = this.directions.indexOf(this.facing);
      if (command == "L") {
        cardinalIndex = (cardinalIndex + 4 - 1) % 4;
      } else if (command == "R") {
        cardinalIndex = (cardinalIndex + 1) % 4;
      }
      this.facing = this.directions[cardinalIndex];
      console.log(this.facing);
    }
  };