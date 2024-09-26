import { useReplicant } from "@nodecg/react-hooks";
import { render } from "../../render";
import { ExampleReplicant } from '../../../types/schemas'

const App = () => {
  const [example] = useReplicant<ExampleReplicant>("exampleReplicant");
  return (
    <div id="container">
      <div>This is example.</div>
      <p>Age: {example?.age}</p>
      <p>Text: {example?.text}</p>
    </div>
  );
};

render(<App />);
