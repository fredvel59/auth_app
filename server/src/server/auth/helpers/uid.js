// code that generate a unique id 
import generateString from './string.js';

const uid = () => {
  const head = generateString(10) 
  const date = new Date().getTime();
  return head + date
}

export default uid;

