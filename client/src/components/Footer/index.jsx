const Footer = () => {
  return (
    <footer className="Foot">
      <ul className="FootList">
        <li>
          <img src="../smlplate.png" alt="plate" />
        </li>
        <li className="Righty">A</li>
        <li className="Link">
          <a
            href="https://bryan-taboada.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bryan
          </a>
        </li>
        <li className="Link">
          <a
            href="https://josiah-rowland.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Josiah
          </a>
        </li>
        <li className="Link">
          <a
            href="https://github.com/SergMart7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sergio
          </a>
        </li>
        <li className="Lefty"> Production </li>
        <li>
          <img src="../smlplate.png" alt="plate" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
