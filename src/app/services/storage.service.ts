export const setLocalStorage = (list) => {
  localStorage.setItem('cart', JSON.stringify(list));
};

export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
};
