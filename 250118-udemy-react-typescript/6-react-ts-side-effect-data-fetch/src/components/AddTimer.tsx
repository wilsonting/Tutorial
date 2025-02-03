import { useRef } from "react";
import Button from "./UI/Button";
import Form, { FormHandle } from "./UI/Form";
import Input from "./UI/Input";
import { useTimersContext } from "../store/timers-context";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    form.current?.clear();
  }

  return (
    <Form onSave={handleSaveTimer} id="add-timer" ref={form}>
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
