import { Vector } from './Vector';

const v01 = new Vector(0, 1);
const v21 = new Vector(2, 1);
const v22 = new Vector(2, 2);
const v63 = new Vector(6, 3);

test('creates new vector', () => {
  expect(new Vector(0, 0));
});

test('adds vectors', () => {
  expect(Vector.add(v01, v21)).toEqual(v22);
});

test('adds vectors mutually', () => {
  const v01 = new Vector(0, 1);
  const v21 = new Vector(2, 1);
  const v22 = new Vector(2, 2);
  expect(v01.add(v21)).toEqual(v22);
});

test('scalar prod', () => {
  expect(Vector.dot(v21, 3)).toEqual(v63);
});
