export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
       <div className="d-flex align-center">
        <img width={40} height={40} src="./misc/whitelogo.svg" alt="Logo" className="mr-5"/>
          <div>
            <h3>VINYL.STORE</h3>
            <p>Online Vinyl Album Marketplace</p>
          </div>
       </div>
       <div className="search-block">
        <input placeholder="Search..." className="search-field">

        </input>
        <img src="./misc/Search.svg" alt="Search" className="search-button" />
       </div>
          <div className="header-right">
            <img src="./misc/cart1.svg" alt="Cart"/>
            <span className="ml-10 mr-10">Account balance</span>
            <img src="./misc/user1.svg" alt="User"/>
          </div>
      </header>

      <div className="main-shell">
        <h1>Best-Sellers</h1>
        <div className="content">
            <div className="card">
            <img src="./misc/albums/currensy_pilottalkiii.png" alt="Album Cover" className="album-image" />
            <h3>Curren$y - Pilot Talk III</h3>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$30.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <span>Add To Cart </span>
                  <img width={16} height={16} src="./misc/btn-unchecked.svg" alt="Add" className="ml-10" />
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="./misc/albums/currensy_thelegendofharvardblue.png" alt="Album Cover" className="album-image" />
            <h3>Curren$y - The Legend of harvard Blue</h3>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$25.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <img width={16} height={16} src="./misc/heart-unlike.svg" alt="Like" />
                </div>
              </button>
              <button>
                <div className="button-shell">
                  <img width={16} height={16} src="./misc/btn-unchecked.svg" alt="Add" />
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/currensyjetlife_weedandinstrumentals3.png" alt="Album Cover" className="album-image" />
              <h3>Curren$y & Jet Life - W&I 3</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$27.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <span>Add To Cart </span>
                  <img width={16} height={16} src="./misc/btn-unchecked.svg" alt="Add" className="ml-10" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="card">
            <img src="./misc/albums/jayworthythealchemistlndndrgs_fantasyisland.png" alt="Album Cover" className="album-image" />
            <h3>Jay Worthy & The Alchemist & LNDN DRGS - Fantasy Island</h3>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$20.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <span>Add To Cart </span>
                  <img width={16} height={16} src="./misc/Plus.svg" alt="Add" className="ml-10" />
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="./misc/albums/dblockeurope_theblueprint.png" alt="Album Cover" className="album-image" />
            <h3>D-Block Europe - The Blueprint</h3>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$15.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <span>Add To Cart </span>
                  <img width={16} height={16} src="./misc/Plus.svg" alt="Add" className="ml-10" />
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <img src="./misc/albums/larryjune_theportofsanfrancisco.png" alt="Album Cover" className="album-image" />
            <h3>Larry June - The Port of San Francisco</h3>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$35.99</b>
              </div>
              <button>
                <div className="button-shell">
                  <span>Add To Cart </span>
                  <img width={16} height={16} src="./misc/Plus.svg" alt="Add" className="ml-10" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

