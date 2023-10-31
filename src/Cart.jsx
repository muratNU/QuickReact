import './Cart.css';

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <div>
            <h2> The cart is empty </h2>
            <p> You can simply select courses by clicking on them and de-select by re-clicking </p>
        </div>
      : 
        <div>
            <h2> Selected Courses </h2>
            {selected.map(([courseCode, courseInfo]) => (
            <div key={courseCode}>
                {`${courseCode} -- ${courseInfo.title}`}
            </div>
            ))}
        </div>
    }
  </div>
);

export default Cart;