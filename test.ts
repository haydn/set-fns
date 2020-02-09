import { strict as assert } from "assert";
import {
  set,
  and,
  or,
  not,
  xor,
  equal,
  subset,
  strictSubset,
  superset,
  strictSuperset
} from "./index";

assert.deepEqual(set(), new Set());

assert.deepEqual(set([1, 2, 3]), new Set([1, 2, 3]));

(() => {
  const a = new Set([1, 2, 3]);
  assert.equal(set(a), a);
})();

assert.deepEqual(and([1, 2, 3], [2, 3, 4]), set([2, 3]));

assert.deepEqual(or([1, 2, 3], [2, 3, 4]), set([1, 2, 3, 4]));

assert.deepEqual(not([1, 2, 3], [2, 3, 4]), set([1]));

assert.deepEqual(xor([1, 2, 3], [2, 3, 4]), set([1, 4]));

assert(equal([1, 2, 3], [3, 2, 1]));

assert(!equal([1, 2, 3], [4, 5, 6]));

assert(subset([1, 2, 3], [4, 3, 2, 1]));

assert(subset([1, 2, 3], [3, 2, 1]));

assert(!subset([1, 2, 3], [2, 1]));

assert(strictSubset([1, 2, 3], [4, 3, 2, 1]));

assert(!strictSubset([1, 2, 3], [3, 2, 1]));

assert(!strictSubset([1, 2, 3], [2, 1]));

assert(superset([4, 3, 2, 1], [1, 2, 3]));

assert(superset([3, 2, 1], [1, 2, 3]));

assert(!superset([2, 1], [1, 2, 3]));

assert(strictSuperset([4, 3, 2, 1], [1, 2, 3]));

assert(!strictSuperset([3, 2, 1], [1, 2, 3]));

assert(!strictSuperset([2, 1], [1, 2, 3]));
