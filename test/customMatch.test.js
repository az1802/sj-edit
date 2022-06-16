const { toMatchSnapshot } = require('jest-snapshot');
const { sleep } = require('./util');
// 自定义match
expect.extend({
  async toRange(received, floor, ceiling) {
    console.log('received, floor, ceiling: ', received, floor, ceiling);
    // console.log('等待后台判断结果', this.utils)
    await sleep(100)
    if (received >= floor && received <= ceiling) {
      return new Promise((resolve, reject) => { //返回异步函数
        setTimeout(() => {
          resolve({
            message: () =>
              `expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: true,
          })
        }, 100)
      });
    } else {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  }
})


describe.skip('test sum', () => {
  test('addition of 2 numbers', async () => {
    console.log(8, new Date());
    await sleep(100)
    expect(5 + 3).toBe(8);
    await expect(4).toRange(1, 10)
  }, 6000);

})
