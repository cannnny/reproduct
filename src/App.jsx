import "./reset.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container header_inner">
          <div className="header_logo">
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className="header_menu">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#bicycle">Bicycle</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <img className="cover_img" src="/img/mainvisual.jpg" alt="" />
      <div className="main">
        <div className="container main_inner">
          <div id="about">
            <h2>
              <span className="heading">About</span>
            </h2>
            <div className="flex">
              <img className="icon" src="/img/about.jpg" alt="" />
              <div className="about_text">
                <h3>KAKERU MIYAICHI</h3>
                <p>テキスト</p>
              </div>
            </div>
          </div>
          <div id="bicycle">
            <h2>
              <span className="heading">Bicycle</span>
            </h2>
            <div className="flex">
              <div className="photos">
                <img className="photo" src="/img/bicycle1.jpg" alt="" />
                <h3>タイトル</h3>
                <p>テキスト</p>
              </div>
              <div className="photos">
                <img className="photo" src="/img/bicycle2.jpg" alt="" />
                <h3>タイトル</h3>
                <p>テキスト</p>
              </div>
              <div className="photos">
                <img className="photo" src="/img/bicycle3.jpg" alt="" />
                <h3>タイトル</h3>
                <p>テキスト</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container footer_inner">
          <p>@ 2020 Profile</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
