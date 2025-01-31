import DarkMode from './DarkMode';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between
      py-10 sm:flex-row sm:item-center gap-4
      ">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <DarkMode />
          <h1>Profile</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
