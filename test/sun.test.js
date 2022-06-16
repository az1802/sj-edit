function sum(a, b) {
  return a + b;
}
async function sleep(timeout = 2000) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timeout);
  })
}


// beforeAll(() => {
//   console.log('beforeAll')
// })
// beforeEach(() => {
//   console.log('beforeEach')
// })
// afterAll(() => {
//   console.log('afterAll')
// })
// afterEach(() => {
//   console.log('afterEach')
// })

describe.skip('test sum', () => {
  test.concurrent('addition of 2 numbers', async () => {
    console.log(8, new Date());
    await sleep(1000)
    expect(5 + 3).toBe(8);
  }, 6000);

  test.concurrent.each([2])('subtraction 2 numbers', async () => {
    console.log(2, new Date());
    expect(5 - 3).toBe(2);
  });

  test.failing('failing', () => {
    expect(5).toBe(4)
  });
})
describe.skip('test sum2', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(2, 1)).toBe(3);
  });
  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
})
