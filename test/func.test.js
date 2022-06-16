describe('fucntion test', () => {

  const sum = (a, b) => a + b;
  const Person = function (name) {
    this.name = name;
  }

  test('fn1', () => {

    const mockFn = jest.fn(sum);
    mockFn.call({ a: "aaa" }, 'bb')
    mockFn()
    mockFn.apply({ b: "bbb" }, [1, 2])
    // console.log(mockFn.mock.contexts)
    // console.log(mockFn.mock.results)
    // expect(mockFn).toReturnWith(41)
  })
  // test('fn2', () => {
  //   expect(1).toBe(2);
  // })
  // test('fn3', () => {
  //   expect(1).toBe(2);
  // })
  // test('fn4', () => {
  //   console.log('fn4 test')
  //   expect(1).toBe(2);
  // })
})