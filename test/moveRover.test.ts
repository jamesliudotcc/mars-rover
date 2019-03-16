import { stepRover } from '../src/stepRover';

// Turn R
test('When Rover is pointed to N, R turns it to E', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'N' }, 'R')).toEqual({
    x: 1,
    y: 1,
    direction: 'E',
  });
});
test('When Rover is pointed to E, R turns it to S', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'E' }, 'R')).toEqual({
    x: 1,
    y: 1,
    direction: 'S',
  });
});
test('When Rover is pointed to S, R turns it to W', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'S' }, 'R')).toEqual({
    x: 1,
    y: 1,
    direction: 'W',
  });
});
test('When Rover is pointed to W, R turns it to N', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'W' }, 'R')).toEqual({
    x: 1,
    y: 1,
    direction: 'N',
  });
});

// Turn L
test('When Rover is pointed to N, L turns it to W', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'N' }, 'L')).toEqual({
    x: 1,
    y: 1,
    direction: 'W',
  });
});
test('When Rover is pointed to E, L turns it to N', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'E' }, 'L')).toEqual({
    x: 1,
    y: 1,
    direction: 'N',
  });
});
test('When Rover is pointed to S, L turns it to E', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'S' }, 'L')).toEqual({
    x: 1,
    y: 1,
    direction: 'E',
  });
});
test('When Rover is pointed to W, L turns it to S', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'W' }, 'L')).toEqual({
    x: 1,
    y: 1,
    direction: 'S',
  });
});

// Move Forward
test('When Rover is pointed to N, M Moves 1 N', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'N' }, 'M')).toEqual({
    x: 1,
    y: 2,
    direction: 'N',
  });
});
test('When Rover is pointed to E, M Moves 1 E', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'E' }, 'M')).toEqual({
    x: 2,
    y: 1,
    direction: 'E',
  });
});
test('When Rover is pointed to S, M Moves 1 S', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'S' }, 'M')).toEqual({
    x: 1,
    y: 0,
    direction: 'S',
  });
});
test('When Rover is pointed to W, M Moves 1 W', () => {
  expect(stepRover({ x: 1, y: 1, direction: 'W' }, 'M')).toEqual({
    x: 0,
    y: 1,
    direction: 'W',
  });
});
