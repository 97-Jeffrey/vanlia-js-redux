// import store from './store';
// import { bugAdded, bugRemoved, bugResolved } from "./actions"

// const unsubscribe= store.subscribe(()=>{
//   console.log("store changed", store.getState())
// })

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugAdded("Bug 2"));
// store.dispatch(bugRemoved(2));
// store.dispatch(bugResolved(1));

import store from "./store";
import * as actions from "./actions";

store.subscribe(()=>{
  console.log("Store changed")
})

store.dispatch(actions.bugAdded("bug1"))
store.dispatch(actions.bugAdded("bug2"))
store.dispatch(actions.bugAdded("bug3"))
store.dispatch(actions.bugResolved(1))

console.log(store.getState());