export default function NavigationBar() {
    return (
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
    );
} 