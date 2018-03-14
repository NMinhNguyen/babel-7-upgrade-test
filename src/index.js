export const merge = (a, b) => ({
  ...a,
  b: {
    ...b,
    c: 'c'
  }
});
