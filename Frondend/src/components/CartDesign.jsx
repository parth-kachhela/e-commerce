import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

const CartDesign = () => {
    return (
        <>
            <section className='cart-section' style={{ margin: "100px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="cart-items">
                                <div className="cart-header mb-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5>Product</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Price</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Quantity</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Total</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="product-info d-flex align-items-center justify-content-between ">
                                                <div className="product-image">
                                                    <img src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-2.webp" className='img-fluid' alt="" />
                                                </div>
                                                <div className="product-detail">
                                                    <h6 className="product-title">Lorem ipsum dolor sit amet</h6>
                                                    <div className="product-meta">
                                                        <span className="product-color">Color: Black</span>
                                                        <span className="product-size">Size: M</span>
                                                    </div>
                                                    <div className="remove-product">
                                                        <a href='#'><FaRegTrashCan /> Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="price-tag">
                                                <span className="current-price">$89.99</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="item-total">
                                                <span>$89.99</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="item-total">
                                                <span>$89.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3">
                            <div className="cart-summary">
                                <h4 className="summary-title">Order Summary</h4>
                                <div className="summary-item d-flex justify-content-between">
                                    <span className="summary-label">Subtotal</span>
                                    <span className="summary-value">$269.96</span>
                                </div>

                                <div className="summary-item shipping-item">
                                    <span className="summary-label">Shipping</span>
                                    <div className="shipping-options">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="standard" checked="" />
                                            <label className="form-check-label" for="standard">
                                                Standard Delivery - $4.99
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="express" />
                                            <label className="form-check-label" for="express">
                                                Express Delivery - $12.99
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="shipping" id="free" />
                                            <label className="form-check-label" for="free">
                                                Free Shipping (Orders over $300)
                                            </label>
                                        </div>
                                    </div>


                                </div>

                                <div className="summary-item">
                                    <span className="summary-label">Tax</span>
                                    <span className="summary-value">$27.00</span>
                                </div>

                                <div className="summary-item disc ">
                                    <span className="summary-label">Discount</span>
                                    <span className="summary-value">-$0.00</span>
                                </div>

                                <div className="summary-total">
                                    <span className="summary-label">Total</span>
                                    <span className="summary-value">$301.95</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartDesign