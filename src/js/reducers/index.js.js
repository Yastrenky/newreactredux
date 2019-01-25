const initialState = {
  articles: [
    { title: "React Redux Tutorial for Beginners", id: 1 },
    { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_ARTICLE") {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  else if (action.type === "REMOVE_ARTICLE") {

    console.log(state.articles.filter(article => article.id !== action.payload))
    return Object.assign({}, state, {
      articles: state.articles.filter(article => article.id !== action.payload)
      // articles: [
      //   ...state.articles.slice(0, action.payload),
      //   ...state.articles.slice(action.payload + 1)
      // ],
    })
  }

  return state;
};
export default rootReducer;