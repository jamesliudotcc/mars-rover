import { moveRover } from '../src/moveRover';

test('When Rover is pointed to N, R turns it to E', () => {
  expect(moveRover({ x: 1, y: 1, direction: 'N' }, 'R')).toEqual({
    x: 1,
    y: 1,
    direction: 'E',
  });
});
