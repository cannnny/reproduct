import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='Container'>
          <div className='headerLogo'>
            <img src='/img/logo.svg'  alt='' />
          </div>
          <div className='headerMenu'>
            <ul>
              <li>About</li>
              <li>Bicycle</li>
            </ul>
          </div>
        </div>
      </header>
      <div className='main'>
        <div className='Container'>
          <img src='/img/mainvisual.jpg' alt='' />
          <div className='about'>
            <div className='Container'>
              <h1>About</h1>
              <img src='/img/about.jpg' alt='' />
              <h2>KAKERU MIYAICHI</h2>
              <p>テキスト</p>
            </div>
          </div>
          <div className='bicycle'>
            <div className='container'>
              <h1>Bicycle</h1>
              <div className='contents'>
                <img src='/img/bicycle1.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
              <div className='contents'>
                <img src='/img/bicycle2.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
              <div className='contents'>
                <img src='/img/bicycle3.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='footerContainer'>
          <p>@ 2020 Profile</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
