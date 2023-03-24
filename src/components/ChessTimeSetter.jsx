
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


function ChessTimeSetter() {
      const dispatch = useDispatch();
      const handleChange = e => {
        const value = e.value;
        dispatch({type: `TIME/SET_CHESS-TIME:${value}`})
    };

    const options = [
      { value: '5:00', label: '5:00' },
      { value: '10:00', label: '10:00' },
      { value: '15:00', label: '15:00' },
      { value: '30:00', label: '30:00' },
      { value: '1:00:00', label: '1:00:00' },
      { value: '1:30:00', label: '1:30:00' },
    ];

  return (
    <div>
      <Select 
      options={options}
      onChange={e => handleChange(e)}
      />
    </div>
  )
}

export default connect(null, null) (ChessTimeSetter);
