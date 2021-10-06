import '../styles/App.scss';
import initialData from '../data/contacts.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newLastname, setNewLastname] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleChangeSearch = (ev) => {
    //poner el valor del input
    setSearch(ev.currentTarget.value);
  };

  const handleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
  };

  const handleChangeLastname = (ev) => {
    setNewLastname(ev.currentTarget.value);
  };

  const handleChangePhone = (ev) => {
    setNewPhone(ev.currentTarget.value);
  };

  const handleChangeEmail = (ev) => {
    setNewEmail(ev.currentTarget.value);
  };

  //para que no se refresque la pagina al darle a añadir.
  const handleClick = (ev) => {
    ev.preventDefault();

    const newContact = {
      name: newName,
      lastname: newLastname,
      phone: newPhone,
      email: newEmail,
    };

    setData([...data, newContact]);

    console.log(data);
  };

  //que dentro del nombre este incluido lo que pone la usuaria en el campo de busqueda. Nos quedamos con los contactos que cumplen el primer filtro que es el nombre O que cumplan el segundo que es el apellido.
  const dataFiltered = data.filter(
    (contact) =>
      contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      contact.lastname.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const htmlContactList = dataFiltered.map((oneContact, index) => (
    <li key={index} className='contact__item'>
      <p className='contact__name'>
        <label className='contact__label'>Nombre:</label>
        {oneContact.name} {oneContact.lastname}
      </p>
      <p className='contact__phone'>
        <label className='contact__label'>Teléfono:</label>
        <a href={`tel: ${oneContact.phone}`} title='Pulsa aqui para llamar'>
          {oneContact.phone}
        </a>
      </p>
      <p className='contact__mail'>
        <label className='contact__label'>Email:</label>
        <a
          href={`mailto:${oneContact.email}`}
          title='Pulsa aquí para escribirle un mensaje'
        >
          {oneContact.email}
        </a>
      </p>
    </li>
  ));

  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Filtrar contactos por nombre'
            onChange={handleChangeSearch}
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{htmlContactList}</ul>

        {/* new contact */}
        <form className='new-contact__form'>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            onChange={handleChangeName}
            value={newName}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Apellidos'
            onChange={handleChangeLastname}
            value={newLastname}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            placeholder='Teléfono'
            onChange={handleChangePhone}
            value={newPhone}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleChangeEmail}
            value={newEmail}
          />
          <input
            className='new-contact__btn'
            type='submit'
            value='Añadir'
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
