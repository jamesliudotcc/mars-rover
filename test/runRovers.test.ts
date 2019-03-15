import { runRovers } from '../src/runRovers';

test('First example rover works', () => {
  expect(
    runRovers({
      position: { x: 1, y: 2, direction: 'N' },
      commands: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
    })
  ).toEqual({ x: 1, y: 3, direction: 'N' });
});
test('Second example rover works', () => {
  expect(
    runRovers({
      position: { x: 3, y: 3, direction: 'E' },
      commands: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
    })
  ).toEqual({ x: 5, y: 1, direction: 'E' });
});
