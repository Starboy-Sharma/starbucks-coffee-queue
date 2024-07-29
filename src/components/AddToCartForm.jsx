// @ts-nocheck
import { PropTypes } from 'prop-types';
import { CiCoffeeCup } from 'react-icons/ci';
import { GiCoffeeBeans } from 'react-icons/gi';

function AddToCartForm({ addToCart }) {
  function handleSubmit(event) {
    event.preventDefault();
    addToCart(event.target.cartItem.value);
    event.target.cartItem.value = '';
  }

  return (
    <div className="AddToCartForm">
      <form onSubmit={handleSubmit} name="add-to-cart">
        <div className="form-group">
          <label htmlFor="add-queue">
            <CiCoffeeCup size="32px" color="#362415" />
            Total Coffee
          </label>
          <input
            type="number"
            className="form-control"
            id="add-queue"
            placeholder="Enter quantity"
            onInvalid={(e) =>
              e.target.setCustomValidity('Please enter a valid number')
            }
            onInput={(e) => e.target.setCustomValidity('')}
            name="cartItem"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Checkout
            <GiCoffeeBeans size="16px" color="#ffffff" />
          </button>
        </div>
      </form>
    </div>
  );
}

AddToCartForm.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default AddToCartForm;
