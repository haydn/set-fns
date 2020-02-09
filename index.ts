const set = <T>(x: Iterable<T> = []): Set<T> =>
  x instanceof Set ? x : new Set(x);

const and = <T>(a: Iterable<T>, b: Iterable<T>): Set<T> => {
  const A = set(a);
  const B = set(b);
  return set([...A].filter(x => B.has(x)));
};

const or = <T>(a: Iterable<T>, b: Iterable<T>): Set<T> => set([...a, ...b]);

const not = <T>(a: Iterable<T>, b: Iterable<T>): Set<T> => {
  const A = set(a);
  const B = set(b);
  return set([...A].filter(x => !B.has(x)));
};

const xor = <T>(a: Iterable<T>, b: Iterable<T>): Set<T> =>
  not(or(a, b), and(a, b));

const equal = (a: Iterable<any>, b: Iterable<any>): boolean => {
  const A = set(a);
  const B = set(b);
  return A.size === B.size && [...A].every(x => B.has(x));
};

const subset = (a: Iterable<any>, b: Iterable<any>): boolean => {
  const A = set(a);
  const B = set(b);
  return [...A].every(x => B.has(x));
};

const strictSubset = (a: Iterable<any>, b: Iterable<any>): boolean => {
  const A = set(a);
  const B = set(b);
  return A.size < B.size && [...A].every(x => B.has(x));
};

const superset = (a: Iterable<any>, b: Iterable<any>): boolean => subset(b, a);

const strictSuperset = (a: Iterable<any>, b: Iterable<any>): boolean =>
  strictSubset(b, a);

export {
  set,
  and,
  and as intersection,
  or,
  or as union,
  not,
  not as subtract,
  not as difference,
  xor,
  equal,
  subset,
  strictSubset,
  superset,
  strictSuperset
};
