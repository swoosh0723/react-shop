import { Link, Route, Switch } from 'react-router-dom';


function Goods(props) {

  return (
    <Link
      as={Link}
      to={'/detail/' + props.goods.id}
    >
      <div
        className="goods"
        key={props.i}
      >
        <div className="goodsThumbnail">
          <img
            src={props.goods.image}
            alt=""
          >
          </img>
        </div>
        <div className="goodsInformation">
          <span className="goodsBrand">
            {props.goods.brand}
          </span>

          <strong className="goodsName">
            {props.goods.name}

          </strong>

          <em className="goodsPrice">
            {props.goods.price}원
          </em>

          <em className="goodsRate">
            {props.goods.rate}
          </em>
        </div>
      </div>
    </Link>
  )
}

export default Goods