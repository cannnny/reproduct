import './reset.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='container'>
          <div className='headerLogo'>
            <img src='/img/logo.svg'  alt='' />
          </div>
          <div className='headerMenu'>
            <ul>
              <li><a href='#about'>About</a></li>
              <li><a href='#bicycle'>Bicycle</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className='main'>
        <div className='container'>
          <img src='/img/mainvisual.jpg' alt='' />
          <div id='title' className='about'>
            <div className='container'>
              <h1>About</h1>
              <img src='/img/about.jpg' alt='' />
              <h2>KAKERU MIYAICHI</h2>
              <p>テキスト</p>
            </div>
          </div>
          <div id='bicycle' className='bicycle'>
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
        <div className='footercontainer'>
          <p>@ 2020 Profile</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
