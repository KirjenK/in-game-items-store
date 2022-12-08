export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_DELL = 'BASKET_DELL';

export const basketAdd = (basket) => ({
  type: BASKET_ADD, payload: basket,
});

export const basketDel = (basket) => ({
  type: BASKET_DELL, payload: basket,
});