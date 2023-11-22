export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
       <div className="d-flex align-center">
        <img width={40} height={40} src="./misc/examplelogo.svg" alt="Logo"/>
          <div>
            <h3>Online Store</h3>
            <p>Vinyl album store</p>
          </div>
       </div>
          <ul className="d-flex align-center">
            <li className="mr-10">
              <img src="./misc/cart1.svg" alt="Cart"/>
              <span className="ml-10">Money amount</span>
            </li>
            <li>
              <img src="./misc/user1.svg" alt="User"/>
            </li>
          </ul>
      </header>
      <div className="content">
        <h1>Best-Sellers</h1>
      </div>
    </div>
  );
}
