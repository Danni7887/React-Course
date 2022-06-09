import { useEffect, useState } from "react";

function Greeting() {
  useEffect(() => {
    console.log("componentDidMount similar Greeting");

    return () => {
      console.log("componentWillUnmount similar Greeting");
    };
  }, []);

  return <h3>Hello</h3>;
}

const FunctionalComponent = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount similar");
  }, []);

  useEffect(() => {
    console.log("every time effect");
  });

  useEffect(() => {
    console.log("every count changes effect");
  }, [count]);

  return (
    <div>
      {show && <Greeting />}
      <p>
        <button onClick={() => setShow(!show)}>Show/Hide Greet</button>
      </p>
      <p>
        <span>Count {count}</span>
        <br />
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </p>
    </div>
  );
};

export default FunctionalComponent;
