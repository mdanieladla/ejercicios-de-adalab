import '../styles/Link.scss';

const Links = (props) => {
  const openInNewWindow = (openInNewTab) => {
    if (openInNewTab) {
      return '_blank';
    } else {
      return '_self';
    }
  };

  return (
    <li>
      <a
        href={`https://adalab.es/${props.href}/`}
        rel='noreferrer'
        target={openInNewWindow(props.openInNewTab)}
      >
        {props.text}
      </a>
    </li>
  );
};

export default Links;
