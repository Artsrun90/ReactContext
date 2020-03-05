import React from 'react';

import axios from 'axios';

export default class Ruby extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/tasks`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }

  render() {
    return (
      <ul>
        { this.state.tasks.map(tasks => <div>
          <h1>{tasks.taskName}</h1>
          <h3><li>{tasks.taskDescription}</li></h3>
        </div>)}
      </ul>
    )
  }
}