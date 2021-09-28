const InputGroupRadio = (props) => {
  return (
    <div className='input-group-radio'>
      <label className='label-radio' htmlFor={props.radioId}>
        {props.labelText}
      </label>
      <input
        type='radio'
        name='paymentType'
        id={props.radioId}
        value={props.radioValue}
        checked={props.RadioChecked}
        onChange={props.handlePaymentType}
      />
    </div>
  );
};

export default InputGroupRadio;
