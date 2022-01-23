import PropTypes from 'prop-types';
export const Input = (props) => {
  const { label, value, getValue, onKeyDown } = props;
  const handleChange = (e) => {
    getValue({ label: label, value: e.target.value });
  };
  return (
    <div className="m-3 inline">
      <label htmlFor={label ? 'search_input' : 'element_input'} className="block">
        {label ? 'Search for element' : 'Input elements'}
      </label>
      <input
        id={label ? 'search_input' : 'element_input'}
        type="text"
        className="p-1 my-2 border rounded bg-black text-center"
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  getValue: PropTypes.func,
  onKeyDown: PropTypes.func,
  props: PropTypes.object,
};
