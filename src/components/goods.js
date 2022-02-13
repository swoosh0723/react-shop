
function Goods(props) {
  return (
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
          {props.goods.price}
        </em>

        <em className="goodsRate">
          {props.goods.rate}
        </em>
      </div>
    </div>
  )
}

export default Goods