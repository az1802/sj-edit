async function sleep(timeout = 2000) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timeout);
  })
}

function sum(a, b) {


  return a + b;
}



module.exports = {
  sleep,
  sum
}