const Links = (props) => {
  return (
    <a
      href='https://adalab.es/'
      rel='noreferrer'
      target='_blank'
      className='link'
    >
      {props.text}
    </a>
  );
};

export default Links;
