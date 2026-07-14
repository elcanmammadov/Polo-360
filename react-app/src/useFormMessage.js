import { useState } from "react";

export function useFormMessage(successText) {
  const [message, setMessage] = useState({ text: "", type: "" });

  function handleSubmit(e) {
    const form = e.target;
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      setMessage({ text: "Please fill in all required fields correctly.", type: "error" });
      return;
    }
    setMessage({ text: successText, type: "success" });
    form.reset();
  }

  return { message, handleSubmit };
}
