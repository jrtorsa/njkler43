import React, { Component } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="filter">
          <input
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            placeholder="Ingresa el término de búsqueda"
          />
        </div>
        <ul>
          {posts.filter( val => {
            if(this.state.search === ''){
              return val
            } else if(val.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())){
              return val
            }
          }).map((post, index) => (
            <li key={index}>
              <a href={post.url}>
                <img src={post.image} />
              </a>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
