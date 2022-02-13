
function Goods(props) {
  return (
    <div className="goods">
      <div className="goodsThumbnail">
        <img
          src="https://image.msscdn.net/images/goods_img/20200918/1611805/1611805_1_500.jpg"
          alt=""
        >
        </img>
      </div>
      <div className="goodsInformation">
        <span className="goodsBrand">
          {props.shoesBrand}
        </span>

        <strong className="goodsName">
          {props.shoesName}

        </strong>

        <em className="goodsPrice">
          {props.shoesPrice}
        </em>

        <em className="goodsRate">
          {props.shoesRate}
        </em>
      </div>
    </div>
  )
}

export default Goods