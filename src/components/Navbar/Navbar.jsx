import navImg from "../../assets/logo.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={navImg} height={60} width={60} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span className="mr-1">{availableBalance}</span>
          <span className="mr-1">Coins</span>
          <span>🪙</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
