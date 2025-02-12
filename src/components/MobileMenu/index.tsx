export const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <img src="../src/assets/icons/logo.svg" className="mobile-menu__logo logo" />
      <button className="mobile-menu__btn-close">
        <img src="../src/assets/icons/close.svg" />
      </button>
      <nav className="navbar mobile-menu__navbar">
        <ul className="navbar__list mobile-menu__navbar-list">
          <li data-target="#teachers" className="navbar__list-item">
            преподаватели
          </li>
          <li data-target="#why-we" className="navbar__list-item">
            почему мы
          </li>
          <li data-target="#memes" className="navbar__list-item mems">
            memes
          </li>
          <li data-target="#reviews" className="navbar__list-item">
            отзывы
          </li>
          <li data-target="#prices" className="navbar__list-item">
            цены
          </li>
          <li data-target="#motivation" className="navbar__list-item">
            мотивация
          </li>
          <li data-target="#contacts" className="navbar__list-item">
            контакты
          </li>
        </ul>
      </nav>
      <button className="btn big light btn_booking mobile-menu__btn-booking">
        <span>записаться на занятие</span>
        <img src="../src/assets/icons/telegram.svg" />
      </button>
    </div>
  );
};
