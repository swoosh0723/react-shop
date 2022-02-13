
function Goods(props) {
  return (
    <div
      className="goods"
      key={props.goodsId}
    >
      <div className="goodsThumbnail">
        <img
          src={props.goodsImage}
          alt=""
        >
        </img>
      </div>
      <div className="goodsInformation">
        <span className="goodsBrand">
          {props.goodsBrand}
        </span>

        <strong className="goodsName">
          {props.goodsName}

        </strong>

        <em className="goodsPrice">
          {props.goodsPrice}
        </em>

        <em className="goodsRate">
          {props.goodsRate}
        </em>
      </div>
    </div>
  )
}

export default Goods