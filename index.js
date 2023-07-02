const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCreams() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAMS:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       console.log("default action dispatched");
//       return state;
//   }
// };

const initialCakeState = {
  quantity: 10,
};

const initialIceCreamState = {
  quantity: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      console.log("default action dispatched");
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      console.log("default action dispatched");
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();

/**
 * REDUX PATTERN
 * ==============
 * Create a store
 * Declare the initial state and the reducer
 * Define your actions and action creators
 * Subscribe to the store
 * Dispatch actions to update the store
 * Unsubscribe to the changes
 */
