export const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];

export const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
        case "ADD":
          let newArr = [...state, {
            id: state.at(-1).id + 1,
            title: action.value,
            complete: false,
          }]
          console.log(newArr)
          return newArr
      default:
        return state;
    }
  };