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
          <div id='about'>
            <div className='contents'>
              <h1><span className='heading'>About</span></h1>
              <img className='icon' src='/img/about.jpg' alt='' />
              <h2>KAKERU MIYAICHI</h2>
              <p>テキスト</p>
            </div>
          </div>
          <div id='bicycle'>
            <div className='contents'>
              <h1><span className='heading'>Bicycle</span></h1>
              <div className='photos'>
                <img className='photo' src='/img/bicycle1.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
              <div className='photos'>
                <img className='photo' src='/img/bicycle2.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
              <div className='photos'>
                <img className='photo' src='/img/bicycle3.jpg' alt='' />
                <h2>タイトル</h2>
                <p>テキスト</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='container'>
          <p>@ 2020 Profile</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
