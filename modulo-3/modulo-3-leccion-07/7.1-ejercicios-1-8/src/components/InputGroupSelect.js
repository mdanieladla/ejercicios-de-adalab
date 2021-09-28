const InputGroupSelect = (props) => {
  return (
    <div className='input-group-select'>
      <label className='label-text' htmlFor='region'>
        Indica tu región:
      </label>
      <select
        className='input-select'
        name='region'
        id='region'
        value={props.region}
        onChange={props.handleRegion}
      >
        <option>{props.SelectOption1}</option>
        <option>{props.SelectOption2}</option>
        <option>{props.SelectOption3}</option>
        <option>{props.SelectOption4}</option>
        <option>{props.SelectOption5}</option>
      </select>
    </div>
  );
};

export default InputGroupSelect;
