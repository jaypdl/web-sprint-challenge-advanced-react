import { useState } from 'react'

// write your custom hook here to control your checkout form

export default function useForm(initialSuccessMessage, initialValue) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccessMessage);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return [showSuccessMessage, setShowSuccessMessage, values, handleChanges]
}