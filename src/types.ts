export type CompassDiretion = 'N' | 'E' | 'S' | 'W';
export type RoverCommand = 'M' | 'R' | 'L';
export type Boundary = { x: Number; y: Number };
export type Position = {
  x: Number;
  y: Number;
  direction: CompassDiretion;
};
export type Rover = {
  position: Position;
  directions: RoverCommand[];
};
