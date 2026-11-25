import Logo from "./Logo.png";


export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img src={Logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Luck Larba</h1>
      </header>
    </div>
  );
}