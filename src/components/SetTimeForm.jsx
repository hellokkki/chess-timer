
import React, { useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';


function SetTimeForm({onSubmit}) {

      const [value, setValue] = useState();
   
    
      const handleChange = e => {
        const value = e.value;
        return setValue(value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(value);
    };

    const options = [
      { value: '5:00', label: '5:00' },
      { value: '10:00', label: '10:00' },
      { value: '15:00', label: '15:00' },
    ];

  return (
    handleSubmit,
    <div>
      <form onSubmit={e => handleSubmit(e)}>
      <Select 
      options={options}
      onChange={e => handleChange(e)}
      />
      <button>submit me</button>
      </form>
    </div>
  )
}

export default connect(null, null) (SetTimeForm);
