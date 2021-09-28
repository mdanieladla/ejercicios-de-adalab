// Fichero src/components/App.js
import { useState } from 'react';
import InputGroupSelect from './InputGroupSelect';
import InputGroupText from './InputGroupText';
import InputGroupRadio from './InputGroupRadio';
import Preview from './Preview';

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar

  const renderPaymentTypeText = () => {
    if (paymentType === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (paymentType === 'cash') {
      return 'Efectivo';
    } else if (paymentType === 'cashOnDelivery') {
      return 'Contra reembolso';
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className='form'>
          {/* name */}
          <InputGroupText
            labelText='Escribe un nombre: '
            inputName='name'
            inputId='1'
            inputPlaceholder='Escribe tu nombre'
            handleChange={handleName}
          />
          {/* email */}
          <InputGroupText
            labelText='Escribe un email: '
            inputName='email'
            inputId='2'
            inputPlaceholder='Escribe tu email'
            handleChange={handleEmail}
          />
          {/* region */}
          <InputGroupSelect
            value={region}
            SelectOption1={'España peninsular'}
            SelectOption2={'Islas Canarias'}
            SelectOption3={'Islas Baleares'}
            SelectOption4={'Ceuta'}
            SelectOption5={'Melilla'}
            handleRegion={handleRegion}
          />

          {/* payment type */}
          <label className='label-text'>Indica tu método de pago:</label>

          <InputGroupRadio
            labelText={'Tarjeta de crédito'}
            radioId={'creditCard'}
            radioValue={'creditCard'}
            RadioChecked={paymentType === 'creditCard'}
            handlePaymentType={handlePaymentType}
          />
          <InputGroupRadio
            labelText={'Efectivo'}
            radioId={'cash'}
            radioValue={'cash'}
            RadioChecked={paymentType === 'cash'}
            handlePaymentType={handlePaymentType}
          />
          <InputGroupRadio
            labelText={'Contrareembolso'}
            radioId={'cashOnDelivery'}
            radioValue={'cashOnDelivery'}
            RadioChecked={paymentType === 'cashOnDelivery'}
            handlePaymentType={handlePaymentType}
          />
          {/* legal terms */}
          <div className='input-group-checkbox'>
            <label className='label-check' htmlFor='legalTerms'>
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type='checkbox'
              name='legalTerms'
              id='legalTerms'
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>
        <Preview
          name={name}
          email={email}
          region={region}
          legalTerms={legalTerms}
        />
        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className='button'
          type='submit'
          value='Enviar'
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className='button reset' onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
