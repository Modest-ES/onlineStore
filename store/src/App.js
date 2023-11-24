export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
       <div className="d-flex align-center header-left">
        <img width={40} height={40} src="./misc/logoalbum.png" alt="Logo" className="logo-album"/>
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
            <img src="./misc/cart1.svg" alt="Cart" className="header-right-btn" />
            <span className="ml-10 mr-10">Account balance</span>
            <img src="./misc/user1.svg" alt="User" className="header-right-btn" />
          </div>
      </header>

      <div className="main-shell">
        <div className="navigation-bar">
          <div className="navigation-btn-block">
            <button className="navigation-btn">
              <a href="#best-sellers">Best-Sellers</a>
            </button>
            <button className="navigation-btn">
              <a href="#hip-hop-records">Hip-Hop</a>
            </button>
            <button className="navigation-btn">
              <a href="#rnb-records">RnB</a>
            </button>
            <button className="navigation-btn">
              Pop
            </button>
            <button className="navigation-btn">
              Instrumental
            </button>
          </div>

          <div className="d-flex align-center">
            <button className="navigation-btn filter-block">
              Filter
            </button>
          </div>
        </div>

        <h1 id="best-sellers">Best-Sellers</h1>
        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/vincestaples_bigfishtheory.png" alt="Album Cover" className="album-image" />
                <h3>Vince Staples - Big Fish Theory</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$39.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/andersonpaak_malibu.png" alt="Album Cover" className="album-image" />
              <h3>Anderson .Paak - Malibu</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$35.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/macmiller_faces.png" alt="Album Cover" className="album-image" />
              <h3>Mac Miller - Faces</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$49.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/larryjune_mrmidnight.png" alt="Album Cover" className="album-image" />
              <h3>Larry June - Mr. Midnight</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/boldyjamesthealchemist_thepriceofteainchina.png" alt="Album Cover" className="album-image" />
              <h3>Boldy James & The Alchemist - The Price of Tea in China</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$41.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/currensy_pilottalk.png" alt="Album Cover" className="album-image" />
              <h3>Curren$y - Pilot Talk</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$26.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/westsidegunnthepurist_rosesareredsoisblood.png" alt="Album Cover" className="album-image" />
              <h3>Westside Gunn & The Purist - Roses Are Red...So is Blood</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$23.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/freddiegibbs_freddie.png" alt="Album Cover" className="album-image" />
              <h3>Freddie Gibbs - Freddie</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/denzelcurry_zuu.png" alt="Album Cover" className="album-image" />
              <h3>Denzel Curry - ZUU</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$29.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Browse more records</h3>
          </button>

        </div>

        <h1 id="hip-hop-records">Hip-Hop Records</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/machhommy_thegat.png" alt="Album Cover" className="album-image" />
                <h3>Mach-Hommy - The G.A.T...</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$2999.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kevingates_lucabrasi3.png" alt="Album Cover" className="album-image" />
              <h3>Kevin Gates - Luca Brasi 3</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/bennythebutcher_burdenofproof.png" alt="Album Cover" className="album-image" />
              <h3>Benny The Butcher - Burden Of Proof</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$29.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/maxokream_brandonbanks.png" alt="Album Cover" className="album-image" />
                <h3>Maxo Kream - Brandon Banks</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$39.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/keyglock_yellowtape.png" alt="Album Cover" className="album-image" />
              <h3>Key Glock - Yellow Tape</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/amine_limbo.png" alt="Album Cover" className="album-image" />
              <h3>Amine - Limbo</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$30.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/jid_theforeverstory.png" alt="Album Cover" className="album-image" />
                <h3>J.I.D - The Forever Story</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$44.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/conwaythemachine_fromkingtoagod.png" alt="Album Cover" className="album-image" />
              <h3>Conway The Machine - From King To A God</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$35.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/keykennybeats_777.png" alt="Album Cover" className="album-image" />
              <h3>KEY! & Kenny Beats - 777</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/riconasty_nasty.png" alt="Album Cover" className="album-image" />
                <h3>Rico Nasty - Nasty</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/cousinstizz_tryingtofindmynextthrill.png" alt="Album Cover" className="album-image" />
              <h3>Cousin Stizz - Trying To Find My Next Thrill</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$22.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/nipseyhussle_victorylap.png" alt="Album Cover" className="album-image" />
              <h3>Nipsey Hussle - Victory Lap</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$99.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/schoolboyq_crashtalk.png" alt="Album Cover" className="album-image" />
                <h3>ScHoolboy Q - CrasH Talk</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$52.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/babytron_lukatroncic.png" alt="Album Cover" className="album-image" />
              <h3>BabyTron - Luka Troncic</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$18.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/joeybadass_allamerikkkanbadass.png" alt="Album Cover" className="album-image" />
              <h3>Joey Bada$$ - ALL-AMERIKKKAN BADA$$</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$37.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Browse more records</h3>
          </button>

        </div>

        <h1 id="rnb-records">RnB Records</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/brysontiller_truetoself.png" alt="Album Cover" className="album-image" />
                <h3>Bryson Tiller - True To Self</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$27.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/sampha_lahai.png" alt="Album Cover" className="album-image" />
              <h3>Sampha - Lahai</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kaliuchis_redmooninvenus.png" alt="Album Cover" className="album-image" />
              <h3>Kali Uchis - Red Moon in Venus</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/danielcaesar_neverenough.png" alt="Album Cover" className="album-image" />
                <h3>Daniel Caesar - Never Enough</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$19.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/zackfox_woodtip.png" alt="Album Cover" className="album-image" />
              <h3>Zack Fox - wood tip</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$99.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/blxst_nolovelostdeluxe.png" alt="Album Cover" className="album-image" />
              <h3>Blxst - No Love Lost (Deluxe)</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$14.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/6lack_free6lack.png" alt="Album Cover" className="album-image" />
                <h3>6LACK - Free 6LACK</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$49.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/arilennox_sheabutterbaby.png" alt="Album Cover" className="album-image" />
              <h3>Ari Lennox - Shea Buttery Baby</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/joji_smithereens.png" alt="Album Cover" className="album-image" />
              <h3>Joji - SMITHEREENS</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/stevelacy_stevelacysdemo.png" alt="Album Cover" className="album-image" />
                <h3>Steve Lacy - Steve Lacy's Demo</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$17.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/sza_ctrl.png" alt="Album Cover" className="album-image" />
              <h3>SZA - Ctrl</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kehlani_whilewewait.png" alt="Album Cover" className="album-image" />
              <h3>Kehlani - While We Wait</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$44.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/kelela_raven.png" alt="Album Cover" className="album-image" />
                <h3>Kelela - Raven</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kaytranada_999percent.png" alt="Album Cover" className="album-image" />
              <h3>KAYTRANADA - 99.9%</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$49.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/jazminesullivan_heauxtales.png" alt="Album Cover" className="album-image" />
              <h3>Jazmine Sullivan - Heaux Tales</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Price: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Add To Favorites" title="Add To Favorites" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Add To Cart" title="Add To Cart" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Browse more records</h3>
          </button>

        </div>

      </div>

      <div class="arrow_icon">
        <a href="#top"><i class="fas fa-chevron-circle-up"></i></a>
      </div>
    </div>
  );
}

