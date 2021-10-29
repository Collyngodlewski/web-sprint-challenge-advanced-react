import { useState } from 'react';


// write your custom hook here to control your checkout form

const useForm = () => {
    const [values, setValues] = useState('');
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      return([values, handleChanges]);
}

export default useForm