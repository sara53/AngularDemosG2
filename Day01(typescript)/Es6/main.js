export function add(x, y) {
  // 100 line
  return x + y;
}

export function square() {
  // 50 line
  return add(2, 3) * 2;
}

export let fname = "ali";

export default function greet() {
  console.log(add(2, 3) + square());
  console.log("Greet");
}

/**
 *
 * export
 *
 * export Naming
 * export default
 */
