// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initialValue, initialSuccess) => {
   const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccess);
   const [values, setValues] = useState(initialValue);

   const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   return [values, handleChanges, showSuccessMessage, setShowSuccessMessage];
}

export default useForm;