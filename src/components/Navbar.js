const Navbar = () => {
  return (
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <div class='navbar-header'>
          <a class='navbar-brand' href='/#'>
            Agasthya Yerrapragada
          </a>
        </div>
        <ul class='nav navbar-nav navbar-right'>
          <li class='active'>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>About</a>
          </li>
          <li>
            <a href='/#'>Projects</a>
          </li>
          <li>
            <a href='/#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
