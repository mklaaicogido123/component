const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 30,
  },
  total: 60,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREADMID": {
      let burgerUpdate = { ...state.burger };
      burgerUpdate[action.propsBurger] += action.amount;
      state.burger = burgerUpdate;
      state.total += action.amount * state.menu[action.propsBurger];
      return { ...state };
    }
  }

  return { ...state };
};
