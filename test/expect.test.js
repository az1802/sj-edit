// 5中模式处理异步
// mock function 处理


describe.skip('async test', () => {
  test('async a', () => {
    const a = { a: "aa" }, a1 = { a: "aa" }

    expect(a).toEqual(a1);
  })
})