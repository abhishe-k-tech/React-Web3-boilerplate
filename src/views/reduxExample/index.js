import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/reducer/counter/counterSlice";

const ReduxExample = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="redux-example">
      <div>
        <h1>Redux Example</h1>
        <p>This is an example of a Redux application.</p>
        <p>
          For more information, see the{" "}
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            Redux
          </a>
          documentation.
        </p>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>Counter : {value}</span>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <div>
          <button type="button" onClick={() => dispatch(incrementByAmount(10))}>
            Increment by 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReduxExample;
