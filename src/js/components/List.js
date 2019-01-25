import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
}

class ConnectedList extends Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(article_id) {
    this.props.removeArticle(article_id)

  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {/* {console.log(this.props)} */}
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}<button onClick={event =>this.handleRemove(el.id)}>remove</button>
          </li>
        ))}
      </ul>
    )
  }

};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;