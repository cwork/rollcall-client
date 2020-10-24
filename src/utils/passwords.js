export const generateRandomPassword = (size = 14) => {
  const props = {
    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    nums: '0123456789',
    specials: '!@#$%^&*()'
  };

  const keys = Object.keys(props);

  let pass = '';

  for (let i = 0; i < size; i++) {
    // generate random number between 0 and 2
    const prop = keys[Math.floor(Math.random() * keys.length)];
    const val = props[prop][Math.floor(Math.random() * props[prop].length)];
    pass += val;
    // generate random number between 0 and length of
  }
  return pass;
};
