const { createStore } = Redux;

initStoreState = {
    todos:[],
    posts:[]
}

const myReducer = function(state=initStoreState, action) {
    if (action.type === "ADD_TODO") {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        };
    }

    if (action.type === "ADD_POST") {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
}

const store = createStore(myReducer)

store.subscribe(() => {
    console.log("store updated");
    console.log(store.getState());
})

const todoAction = {
    type: "ADD_TODO",
    todo: "buy milk"
}

store.dispatch(todoAction);

store.dispatch({type: "ADD_TODO", todo: "sleep some more"});

store.dispatch({type: "ADD_POST", post: "Egg hunt with yoshi"});