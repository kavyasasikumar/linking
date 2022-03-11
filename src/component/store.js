import { createStore } from "redux";

const reducer = (state = { getData: [] }, action) => {
  switch (action.type) {
    case "submit":
      return { ...state, getData: [...state.getData, action.payload] };
    case "delete":
      return{...state,getData:state.getData.filter((d,i)=>{return i!==action.id})}
        
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
