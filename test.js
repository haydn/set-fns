"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var _1 = require("./");
assert_1.strict.deepEqual(_1.set(), new Set());
assert_1.strict.deepEqual(_1.set([1, 2, 3]), new Set([1, 2, 3]));
(function () {
    var a = new Set([1, 2, 3]);
    assert_1.strict.equal(_1.set(a), a);
})();
assert_1.strict.deepEqual(_1.and([1, 2, 3], [2, 3, 4]), _1.set([2, 3]));
assert_1.strict.deepEqual(_1.or([1, 2, 3], [2, 3, 4]), _1.set([1, 2, 3, 4]));
assert_1.strict.deepEqual(_1.not([1, 2, 3], [2, 3, 4]), _1.set([1]));
assert_1.strict.deepEqual(_1.xor([1, 2, 3], [2, 3, 4]), _1.set([1, 4]));
assert_1.strict(_1.equal([1, 2, 3], [3, 2, 1]));
assert_1.strict(!_1.equal([1, 2, 3], [4, 5, 6]));
assert_1.strict(_1.subset([1, 2, 3], [4, 3, 2, 1]));
assert_1.strict(_1.subset([1, 2, 3], [3, 2, 1]));
assert_1.strict(!_1.subset([1, 2, 3], [2, 1]));
assert_1.strict(_1.strictSubset([1, 2, 3], [4, 3, 2, 1]));
assert_1.strict(!_1.strictSubset([1, 2, 3], [3, 2, 1]));
assert_1.strict(!_1.strictSubset([1, 2, 3], [2, 1]));
assert_1.strict(_1.superset([4, 3, 2, 1], [1, 2, 3]));
assert_1.strict(_1.superset([3, 2, 1], [1, 2, 3]));
assert_1.strict(!_1.superset([2, 1], [1, 2, 3]));
assert_1.strict(_1.strictSuperset([4, 3, 2, 1], [1, 2, 3]));
assert_1.strict(!_1.strictSuperset([3, 2, 1], [1, 2, 3]));
assert_1.strict(!_1.strictSuperset([2, 1], [1, 2, 3]));
