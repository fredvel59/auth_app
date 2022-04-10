// code that generate a unique id 
const generateString = require('./string')

const uid = () => {
  const head = generateString(10) 
  const date = new Date().getTime();
  return head + date
}

module.exports = uid;

