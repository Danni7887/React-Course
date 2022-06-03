import { Component, Fragment } from "react";

type AppProps = {};
type AppState = { count: number; showGreeting: boolean };

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Greeting extends Component {
  componentDidMount() {
    console.log("componentDidMount Greeting");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Greeting");
  }

  render() {
    return <span>Hello from a react functional component</span>;
  }
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    console.log("constructor");
    this.state = { count: 0, showGreeting: true };
  }

  componentDidMount() {
    // Api requests
    // Create event listeners
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    console.log(`componentDidUpdate prevProps ${JSON.stringify(prevProps)} prevState ${JSON.stringify(prevState)}`);
  }

  handleClick = () =>
    this.setState((prevState) => {
      const newCountValue = prevState.count + 1;
      return {
        count: newCountValue,
        showGreeting: newCountValue % 2 === 0, // odd = true --- even = false 
      };
    });

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Im a react class component</h1>
        {this.state.showGreeting && <Greeting />}
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </Fragment>
    );
  }
}

export default App;
