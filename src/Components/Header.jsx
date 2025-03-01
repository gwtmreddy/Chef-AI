import logo from "../assets/logo.webp";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Chef AI</h1>
      </header>
    </>
  );
}
