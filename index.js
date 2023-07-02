const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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
      return state;
  }
};

// Convention to name comibined reducer is rootReducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
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
 * ======================================================================
 * Output will be:
 * Initial State { cake: { quantity: 10 }, iceCream: { quantity: 20 } }
 * Updated state { cake: { quantity: 9 }, iceCream: { quantity: 20 } }
 * Updated state { cake: { quantity: 8 }, iceCream: { quantity: 20 } }
 * Updated state { cake: { quantity: 7 }, iceCream: { quantity: 20 } }
 * Updated state { cake: { quantity: 7 }, iceCream: { quantity: 19 } }
 * Updated state { cake: { quantity: 7 }, iceCream: { quantity: 18 } }
 *
 * ======================================================================
 *
 * Now we have a overall global state object where keys are the
 * keys we provided while combininng the individual reducers.
 * To access number of cakes it will be state.cake.quantity
 * To access number of icecreams it will be state.iceCream.quantity
 *
 * ======================================================================
 *
 * Note: When we dispatch an action, both the reducers receive that
 * action. The difference is one of them acts on that action whereas
 * the other just ignores it(it's default case will be exectued).
 *
 * ======================================================================
 *
 * Caution: Since both the reducer receive that action and in case both the
 * reducers have same Case statement, say "TEST_CASE" as of their case, and
 * we dispatch({key:"TEST_CASE"}) then both the reducer will perform the action.
 * So take care of such scenarios where unintentionally you would change state at multiple places.
 *
 * ======================================================================
 */

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
