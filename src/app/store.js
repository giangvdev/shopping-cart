;
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer ={
//    counter: counterReducer,
//     user: userReducer,
  
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;