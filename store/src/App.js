export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
       <div className="d-flex align-center header-left">
        <img width={40} height={40} src="./misc/logoalbum.png" alt="Logo" className="logo-album"/>
          <div className="logo-text"> 
            <h3 className="yellow-text">ALBUM STORE</h3>
            <p>Музыкальные альбомы на заказ</p>
          </div>
       </div>
       <div className="search-block">
        <input placeholder="Поиск..." className="search-field">

        </input>
        <img src="./misc/Search.svg" alt="Search" className="search-button" />
       </div>
          <div className="header-right">
            <img src="./misc/cart1.svg" alt="Cart" className="header-right-btn" />
            <span className="ml-10 mr-10">Баланс</span>
            <img src="./misc/user1.svg" alt="User" className="header-right-btn" />
          </div>
      </header>

      <div className="main-shell">
        <div className="navigation-bar">
          <div className="navigation-btn-block">
            <button className="navigation-btn">
              <a href="#best-sellers">Популярные</a>
            </button>
            <button className="navigation-btn">
              <a href="#hip-hop-records">Хип-Хоп</a>
            </button>
            <button className="navigation-btn">
              <a href="#rnb-records">RnB</a>
            </button>
            <button className="navigation-btn">
              <a href="#pop-records">Поп</a>
            </button>
            <button className="navigation-btn">
              <a href="#soul-records">Соул</a>
            </button>
            <button className="navigation-btn">
              <a href="#instrumental-records">Инструментальные</a>
            </button>
          </div>

          <div className="d-flex align-center">
            <button className="navigation-btn filter-block">
              Фильтр
            </button>
          </div>
        </div>

        <h1 id="best-sellers">Популярные альбомы</h1>
        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/vincestaples_bigfishtheory.png" alt="Album Cover" className="album-image" />
                <h3>Vince Staples - Big Fish Theory</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$39.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$35.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$49.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$41.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$26.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$23.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$29.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

        <h1 id="hip-hop-records">Хип-Хоп альбомы</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/machhommy_thegat.png" alt="Album Cover" className="album-image" />
                <h3>Mach-Hommy - The G.A.T...</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$2999.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$29.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$39.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$30.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$44.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$35.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$22.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$99.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$52.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$18.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$37.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

        <h1 id="rnb-records">RnB альбомы</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/brysontiller_truetoself.png" alt="Album Cover" className="album-image" />
                <h3>Bryson Tiller - True To Self</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$27.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$19.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$99.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$14.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$49.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$17.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$44.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                  <span>Цена: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$49.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
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
                <span>Цена: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

        <h1 id="pop-records">Поп альбомы</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/beyonce_lemonade.png" alt="Album Cover" className="album-image" />
                <h3>Beyonce - Lemonade</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$34.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/carlyraejepsen_emotionsideb.png" alt="Album Cover" className="album-image" />
              <h3>Carly Rae Jepsen - E-MO-TION: Side B</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$35.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/rinasawayama_holdthegirl.png" alt="Album Cover" className="album-image" />
              <h3>Rina Sawayama - Hold The Girl</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/kerokerobonito_bonitogeneration.png" alt="Album Cover" className="album-image" />
                <h3>Kero Kero Bonito - Bonito Generation</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$49.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/yeule_softscars.png" alt="Album Cover" className="album-image" />
              <h3>Yeule - Softscars</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$28.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/markronson_uptownspecial.png" alt="Album Cover" className="album-image" />
              <h3>Mark Ronson - Uptown Special</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/taylorswift_1989.png" alt="Album Cover" className="album-image" />
                <h3>Taylor Swift - 1989</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$44.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/fkatwigs_m3ll155x.png" alt="Album Cover" className="album-image" />
              <h3>FKA twigs - M3LL155X</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$23.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/jessieware_whatsyourpleasure.png" alt="Album Cover" className="album-image" />
              <h3>Jessie Ware - What's Your Pleasure?</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$39.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/kilokish_redux.png" alt="Album Cover" className="album-image" />
                <h3>Kilo Kish - REDUX</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$19.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/dualipa_futurenostalgiathemoonlightedition.png" alt="Album Cover" className="album-image" />
              <h3>Dua Lipa - Future Nostalgia (The Moonlight Edition)</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$55.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/billieeilish_dontsmileatme.png" alt="Album Cover" className="album-image" />
              <h3>Billie Eilish - Don't Smile At Me</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$21.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/carolinepolachek_desireiwanttoturnintoyou.png" alt="Album Cover" className="album-image" />
                <h3>Caroline Polachek - Desire, I Want To Turn Into You</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/24kgoldn_eldorado.png" alt="Album Cover" className="album-image" />
              <h3>24kGoldn - El Dorado</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$14.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/arianagrande_positions.png" alt="Album Cover" className="album-image" />
              <h3>Ariana Grande - Positions</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$31.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

        <h1 id="soul-records">Соул альбомы</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/silksonicandersonpaakbrunomars_aneveningwithsilksonic.png" alt="Album Cover" className="album-image" />
                <h3>Silk Sonic - An Evening With Silk Sonic</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$74.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/foushee_timemachine.png" alt="Album Cover" className="album-image" />
              <h3>Foushee - Time Machine</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$22.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/andre3000_thebluesun.png" alt="Album Cover" className="album-image" />
              <h3>Andre 3000 - The Blue Sun</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$32.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/smino_blkswn.png" alt="Album Cover" className="album-image" />
                <h3>Smino - blkswn</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$36.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/liannelahavas_liannelahavas.png" alt="Album Cover" className="album-image" />
              <h3>Lianne La Havas - Lianne La Havas</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$44.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/tylerthecreator_igor.png" alt="Album Cover" className="album-image" />
              <h3>Tyler, The Creator - IGOR</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$59.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/frankocean_blonde.png" alt="Album Cover" className="album-image" />
                <h3>Frank Ocean - Blonde</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$29.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/sampathegreat_asabovesobelow.png" alt="Album Cover" className="album-image" />
              <h3>Sampa The Great - As Above, So Below</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$19.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/andersonpaak_venice.png" alt="Album Cover" className="album-image" />
              <h3>Anderson .Paak - Venice</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$42.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/thundercat_itiswhatitis.png" alt="Album Cover" className="album-image" />
                <h3>Thundercat - It Is What It Is</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$39.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kaliuchis_porvida.png" alt="Album Cover" className="album-image" />
              <h3>Kali Uchis - Por Vida</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$24.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/childishgambino_awakenmylove.png" alt="Album Cover" className="album-image" />
              <h3>Childish Gambino - Awaken, My Love</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$29.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/nxworriesandersonpaakknxwledge_yeslawd.png" alt="Album Cover" className="album-image" />
                <h3>NxWorries - Yes Lawd!</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$99.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/dram_bigbabydramdeluxe.png" alt="Album Cover" className="album-image" />
              <h3>DRAM - Big Baby DRAM (Deluxe)</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$30.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/arilennox_awaymessage.png" alt="Album Cover" className="album-image" />
              <h3>Ari Lennox - Away Message</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$15.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

        <h1 id="instrumental-records">Инструментальные альбомы</h1>

        <div className="content">
            <div className="card">
              <div className="card-top">
                <img src="./misc/albums/soichiterada_asakusalight.png" alt="Album Cover" className="album-image" />
                <h3>Soichi Terada - Asakusa Light</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$19.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/clamscasino_rainforest.png" alt="Album Cover" className="album-image" />
              <h3>Clams Casino - Rainforest</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$14.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/flume_hithisisflume.png" alt="Album Cover" className="album-image" />
              <h3>Flume - Hi This Is Flume</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$27.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/djkoze_knockknock.png" alt="Album Cover" className="album-image" />
                <h3>DJ Koze - Knock Knock</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$36.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/knxwledge_1988.png" alt="Album Cover" className="album-image" />
              <h3>Knxwledge - 1988</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$45.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/larryfisherman_runonsentencesvol2.png" alt="Album Cover" className="album-image" />
              <h3>Larry Fisherman - Run On Sentences Vol. 2</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$14.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/kennybeats_louie.png" alt="Album Cover" className="album-image" />
                <h3>Kenny Beats - Louie</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$24.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/kaytranadarobertglasper_theartscienceremixes.png" alt="Album Cover" className="album-image" />
              <h3>KAYTRANADA & Robert Glasper - The Art Science Remixes</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$16.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/jdilla_donuts.png" alt="Album Cover" className="album-image" />
              <h3>J Dilla - Donuts</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$89.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/theloniousmartin_season1episode1.png" alt="Album Cover" className="album-image" />
                <h3>Thelonious Martin - Season 1: Episode 1</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$12.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/disclosure_energy.png" alt="Album Cover" className="album-image" />
              <h3>Disclosure - Energy</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$34.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/againstalllogic_20122017.png" alt="Album Cover" className="album-image" />
              <h3>Against All Logic - 2012-2017</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$22.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
              <div className="card-top">
                <img src="./misc/albums/thealchemist_carrythefire.png" alt="Album Cover" className="album-image" />
                <h3>The Alchemist - Carry The Fire</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Цена: </span>
                  <b>$19.99</b>
                </div>
                <div>
                  <button>
                    <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                  </button>
                  <button className="ml-5">
                    <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                  </button>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/sledgren_enigma.png" alt="Album Cover" className="album-image" />
              <h3>Sledgren - Enigma</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$26.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src="./misc/albums/cookinsoul_whatevavol2.png" alt="Album Cover" className="album-image" />
              <h3>Cookin Soul - Whateva Vol. 2</h3>
            </div>
            <div className="card-bottom">
              <div>
                <span>Цена: </span>
                <b>$20.99</b>
              </div>
              <div>
                <button>
                  <img width={16} height={16} src="./misc/btn-heart-empty.png" alt="Добавить в избранное" title="Добавить в избранное" />
                </button>
                <button className="ml-5">
                  <img width={16} height={16} src="./misc/btn-plus.png" alt="Добавить в корзину" title="Добавить в корзину" />
                </button>
              </div>
            </div>
          </div>

          <button className="btn-more">
            <h3>Больше альбомов</h3>
          </button>

        </div>

      </div>

      <div class="arrow_icon">
        <a href="#top"><i class="fas fa-chevron-circle-up"></i></a>
      </div>
    </div>
  );
}

