function delayPrint(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, delay);
  });
}

const array = [1, 4, 2, 3];

const promiseArray = [];

array.sort((a, b) => a - b)
  .forEach((value, index) => {
    const delay = (index + 1) * 1000;
    promiseArray.push(delayPrint(value, delay));
  });

Promise.all(promiseArray);
