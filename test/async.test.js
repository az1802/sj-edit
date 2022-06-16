// 5中模式处理异步
// mock function 处理
const { sum } = require('./util')
console.log('sum: ', sum);
describe('async test', () => {
  test('async a', () => {
    console.log(sum(1, 2));
    expect(sum(1, 2)).toBe(3);
  })
})