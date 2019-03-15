import { runRover } from '../src/runRover';

test('First example rover works', () => {
  expect(
    runRover(
      {
        position: { x: 1, y: 2, direction: 'N' },
        commands: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    )
  ).toEqual({ x: 1, y: 3, direction: 'N' });
});
test('Second example rover works', () => {
  expect(
    runRover(
      {
        position: { x: 3, y: 3, direction: 'E' },
        commands: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    )
  ).toEqual({ x: 5, y: 1, direction: 'E' });
});

test('When rover falls off by going into negative in X direction, throw', () => {
  expect(() => {
    runRover(
      {
        position: { x: 1, y: 1, direction: 'W' },
        commands: ['M', 'M', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    );
  }).toThrow();
});

test('When rover falls off by going into negative in Y direction, throw', () => {
  expect(() => {
    runRover(
      {
        position: { x: 1, y: 1, direction: 'S' },
        commands: ['M', 'M', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    );
  }).toThrow();
});
test('When rover falls off by going over the boundary in X direction, throw', () => {
  expect(() => {
    runRover(
      {
        position: { x: 4, y: 4, direction: 'E' },
        commands: ['M', 'M', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    );
  }).toThrow();
});

test('When rover falls off by going over the boundary in Y direction, throw', () => {
  expect(() => {
    runRover(
      {
        position: { x: 4, y: 4, direction: 'E' },
        commands: ['M', 'M', 'M'],
        boundary: { x: 5, y: 5 },
      },
      []
    );
  }).toThrow();
});
