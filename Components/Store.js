import { extendObservable } from "mobx";


class myStore {
  constructor() {
      extendObservable(this, {
        todos: [],
        name: "Dana",
        loaded: false,
        username: "",
        password: "",
        authenticated: false,
       

      }
    )
  }
}
export default new myStore()
