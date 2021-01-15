// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initialValue, initialSuccess) => {

   // Decided to also include the 'show success message' functionality even though not all forms might not use it, because is allows the hook to work for both forms that do and don't need that functionality.

   const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccess);
   const [values, setValues] = useState(initialValue);

   const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   return [values, handleChanges, showSuccessMessage, setShowSuccessMessage];
}

export default useForm;