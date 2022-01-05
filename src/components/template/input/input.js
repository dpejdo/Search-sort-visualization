// import { useState } from 'react';
import PropTypes from 'prop-types';
export const Input = (props) => {
  //  const [error, setError] = useState('');
  const { value, getValue } = props;
  const handleChange = (e) => {
    getValue(e.target.value);
  };
  return (
    <div className="m-3">
      <label className="block">Input value</label>
      <input
        data-testid="input"
        value={value}
        onChange={handleChange}
        type="text"
        className="p-1 my-2 border rounded border-red-600"
      />

      {/* {error && <p>{error}</p>} */}
    </div>
  );
};
Input.propTypes = {
  value: PropTypes.string,
  getValue: PropTypes.func,
  props: PropTypes.object,
};
