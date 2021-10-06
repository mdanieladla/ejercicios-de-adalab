const Button = (props) => {
  return (
    <>
      {/* <input
      className='button'
      type='submit'
      value='Enviar'
      disabled={isValidForm() === false}
    /> */}
      <button className={props.buttonClass} onClick={props.handleResetButton}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
