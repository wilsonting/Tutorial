import Input from "./components/UI/Input";
import Form, { type FormHandle } from "./components/UI/Form";
import Button from "./components/UI/Button";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    //use "as" to provide the stricter type. Pass in name attribe of the Input component
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
