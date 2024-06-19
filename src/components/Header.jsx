import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>

      {/* // Inline style */}
      {/* <p style={{
        color: 'red',
        textAlign: 'left'
      }}>A community of artists and art-lovers.</p> */}

      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
