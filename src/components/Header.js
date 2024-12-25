import "./../styles/Header.css";
export default function Header({ activeBody, onActiveBody, onModalOpen }) {
  return (
    <div>
      <Banner />
      <Menu
        activeBody={activeBody}
        onActiveBody={onActiveBody}
        onModalOpen={onModalOpen}
      />
    </div>
  );
}
function Banner() {
  return <div className="banner bg-primary"></div>;
}

function Menu({ activeBody, onActiveBody, onModalOpen }) {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <button className="btn btn-primary" onClick={() => onModalOpen(true)}>
          ثبت نام / ورود
        </button>
        <div class="d-flex gap-5">
          <button
            num={2}
            onClick={() => onActiveBody(2)}
            className={` btn btn-outline-primary ${
              activeBody === 2 ? "active" : ""
            }`}
          >
            درباره ما
          </button>
          <button
            num={1}
            onClick={() => onActiveBody(1)}
            className={` btn btn-outline-primary ${
              activeBody === 1 ? "active" : ""
            }`}
          >
            گالری
          </button>
          <button
            num={0}
            onClick={() => onActiveBody(0)}
            className={` btn btn-outline-primary ${
              activeBody === 0 ? "active" : ""
            }`}
          >
            خانه
          </button>
        </div>
      </div>
    </nav>
  );
}
