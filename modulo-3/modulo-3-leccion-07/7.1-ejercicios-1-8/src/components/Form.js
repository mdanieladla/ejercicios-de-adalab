import InputGroupSelect from './InputGroupSelect';
import InputGroupText from './InputGroupText';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheck from './InputGroupCheck';
import Preview from './Preview';
import Button from './Button';
const Form = (props) => {
  return (
    <>
      <form className='form' onSubmit={props.handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className='form'>
          {/* name */}
          <InputGroupText
            labelText='Escribe un nombre: '
            inputName={props.InputName}
            inputId='1'
            inputPlaceholder='Escribe tu nombre'
            handleChange={props.handleChangeName}
          />
          {/* email */}
          <InputGroupText
            labelText='Escribe un email: '
            inputName={props.InputEmail}
            inputId='2'
            inputPlaceholder='Escribe tu email'
            handleChange={props.handleChangeEmail}
          />
          <InputGroupSelect
            value={props.inputRegion}
            SelectOption1={'España peninsular'}
            SelectOption2={'Islas Canarias'}
            SelectOption3={'Islas Baleares'}
            SelectOption4={'Ceuta'}
            SelectOption5={'Melilla'}
            handleRegion={props.handleChangeRegion}
          />
          {/* payment type */}
          <label className='label-text'>Indica tu método de pago:</label>
          <InputGroupRadio
            labelText={'Tarjeta de crédito'}
            radioId={'creditCard'}
            radioValue={'creditCard'}
            RadioChecked={props.paymentTypeChecked === 'creditCard'}
            handlePaymentType={props.handlePaymentTypeRadio}
          />
          <InputGroupRadio
            labelText={'Efectivo'}
            radioId={'cash'}
            radioValue={'cash'}
            RadioChecked={props.paymentTypeChecked === 'cash'}
            handlePaymentType={props.handlePaymentTypeRadio}
          />
          <InputGroupRadio
            labelText={'Contrareembolso'}
            radioId={'cashOnDelivery'}
            radioValue={'cashOnDelivery'}
            RadioChecked={props.paymentTypeChecked === 'cashOnDelivery'}
            handlePaymentType={props.handlePaymentTypeRadio}
          />
          {/* legal terms */}
          <InputGroupCheck
            legalTerms={props.legalTermsChecked}
            handleLegalTerms={props.handleLegal}
          />
        </div>
        {/* reset */}
        <Button
          buttonClass={'button reset'}
          handleResetButton={props.handleResetButton}
          text={'Limpiar el formulario'}
        />
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        {/* send */}
        <Button
          buttonClass={'button'}
          text={'Enviar'}
          handleChange={props.handleValid}
        />
      </form>
    </>
  );
};

export default Form;
