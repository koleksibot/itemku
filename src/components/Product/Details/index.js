import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import Style from './style.module.css';

const Details = () => {

  const [favorite, setFavorite] = useState(false);

  return (
    <div className={Style.container}>
      <div className={Style.icon}>
        {favorite ? (
          <FontAwesomeIcon icon={["fas", "heart"]} color="red" onClick={() => setFavorite(false)} />
        ) : (
          <FontAwesomeIcon icon={["far", "heart"]} onClick={() => setFavorite(true)} />
        )}
      </div>
      <div className={cx(Style.item, 'font1')}>Security Tech</div>
      <div className={cx(Style.game, 'font2')}>Jasa Pengamanan Website</div>
      <div className={cx(Style.itemPrice, 'font1')}>
        <span className={cx(Style.price, 'font1')}>Rp2.000.000 </span>
        <span className={cx(Style.descPrice, 'font2')}>Fast</span>
      </div>
      <div className="font2">
        <div className={Style.discount}>50%</div>
        <span className={Style.normalPrice}> Rp.2.000.000 </span>
      </div>
    </div>
  );
};

export default Details;
