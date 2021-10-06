import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <li>
      <Link to='/'>
        Overview
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          doloribus fuga, quam corporis labore nemo, commodi earum harum quaerat
          libero distinctio. Nihil, qui sunt! Perferendis maxime aliquam
          expedita esse hic!
        </p>
      </Link>
    </li>
  );
};

export default Overview;
