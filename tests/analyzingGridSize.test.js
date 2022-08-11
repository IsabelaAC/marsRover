const {roverPosition, gridSize} = require("../components/analyzingGridSize")

test('testing if the roverPositions returns array of position', () => {
    expect(roverPosition("1 2 N")).toEqual([1, 2, "N"])
});

test('testing if the gridSize returns array of grid sizes', () => {
    expect(gridSize("5 5")).toEqual([5, 5])
})
