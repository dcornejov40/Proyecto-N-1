import CartWidget from '../CartWidget/assets';

const Navbar = () => {
  return (
    <nav>
     <h3>SKINCARE MANDALAMO</h3>
     <div>
     <button>celulares</button>
     <button>tablet</button>
     <button>notebooks</button>
     </div>
     <CartWidget />
    </nav>
  );
};

export default Navbar;