function sum(a, b) {
  return a + b
}

test('10+20=30', () => {
  expect(sum(10, 20)).toBe(30)
})
