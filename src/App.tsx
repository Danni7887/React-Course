import { Component, Fragment } from 'react';

const Greeting = () => <span>Hello from a react functional component</span>;

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Im a react class component</h1>
        <Greeting />
      </Fragment>
    )
  }
}

export default App