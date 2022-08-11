const Rover = require("../components/rover")

test('testing if the rover turn to the left', () => {
    let rover = new Rover ("rover1", 1, 1, "N")
    rover.turn("L")
    expect(rover.facing).toEqual("W")
}) 

test('testing if the rover turn to the right', () => {
    let rover = new Rover("rover2", 1, 1, "S")
    rover.turn("R")
    expect(rover.facing).toEqual("W")
})

test('testing if the rover turns left four times', () => {
    let rover = new Rover("rover1", 1, 1, "N")
    rover.turn("LLLL");
    expect(rover.facing).toEqual("N");
});

test('test if the rover turns right four times', () => {
    let rover = new Rover("rover1", 1, 1, "N")
    rover.turn("RRRR");
    expect(rover.facing).toEqual("N");
});

test('test if the rover moves forward', () => {
    let rover = new Rover("rover1", 1, 2, "N")
    rover.moveForward("M");
    expect(rover.position).toEqual([1, 3]);
});

test('test mission runs according to the given commands and rover faces the correct direction', () => {
    let rover = new Rover("rover1", 1, 2, "N")
    rover.settingPath("LMLMLMLMM");
    rover.runMission();
    expect(rover.facing).toEqual("N");
});

test('test mission runs according to the given commands and rover moves correctly forward', () => {
    let rover = new Rover("rover1", 1, 2, "N")
    rover.settingPath("LMLMLMLMM")
    rover.runMission();
    expect(rover.position).toEqual([1, 3]);
});
