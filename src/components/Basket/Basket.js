import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Basket.module.scss";
import currencyFormatter from "currency-formatter";
import { useSelector, useDispatch } from "react-redux";
import cloneDeep from 'lodash/cloneDeep';

const Basket = ({ data }) => {
  const locale = useSelector((state) => state.locale);
  const summary = useSelector((state) => state.basket.summary);
  const dispatch = useDispatch();
  const vat_rate = parseInt(locale.taxrate) || 0;

  const priceTotal = () => {
    let price = 0;

    data.map((each) => {
      return (price += each.registration_price*each.period);
    });
    const vat = (price * vat_rate) / 100;
    const summaryObj = {
      price: parseFloat(price).toFixed(2),
      total: parseFloat(vat + price).toFixed(2),
      vat_price: parseFloat(vat).toFixed(2),
      vat_rate: vat_rate,
      discount_price: parseFloat(0).toFixed(2),
    };
    return summaryObj;
  };

  dispatch({
    type: "update-basket-summary",
    payload: { summary: priceTotal() },
  });

  const remItem = (obj) => {
    dispatch({
      type: "remove-domain-from-basket",
      payload: { domain: obj },
    });
  };

  const changeHandler = (e,index) => {
    const newArr = cloneDeep(data)
    newArr[index].period = e.target.value;
    dispatch({
      type: "set-domain-to-basket",
      payload: { domain: newArr },
    });
  }
  return (
    <div className={`${styles.Basket} p-3`}>
      <div className="row">
        <div className="col-md-8 cart">
          {/* <div className="title">
            <div className="row">
              <div className="col"></div>
              <div className="col align-self-center text-right text-muted">
                3 items
              </div>
            </div>
          </div> */}
          <div className="d-flex justify-content-between border-bottom">
            <div className="p-2 w-25">
              <b>Description</b>
            </div>
            <div className="p-2">
              <b>Period</b>
            </div>
            <div className="p-2">
              <b>Price</b>
            </div>
          </div>
          {data.map((basketItem, newIndex) => (
              <div key={newIndex} className="d-flex justify-content-between bd-highlight">
                <div className="p-2 w-25 bd-highlight">
                  <a
                    href="#"
                    title={`Delete ${basketItem.domain}!`}
                    className="mr-1"
                    onClick={() => remItem(basketItem)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      ></path>
                    </svg>
                  </a>
                  {basketItem.domain}
                </div>
                <div className="p-2 bd-highlight p-2">
                  <select
                    onChange={(event)=>changeHandler(event,newIndex)}
                    className="form-select"
                    aria-label="Default select example"
                    value={basketItem.period}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="p-2 bd-highlight">
                  {currencyFormatter.format(basketItem.registration_price, {
                    code: locale.currency,
                  })}
                </div>
              </div>
          ))}
          {/* <div className="row">
                <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" /></div>
                    <div className="col">
                        <div className="row text-muted">Shirt</div>
                        <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                </div>
            </div>
            <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" /></div>
                    <div className="col">
                        <div className="row text-muted">Shirt</div>
                        <div className="row">Cotton T-shirt</div>
                    </div>
                    <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                </div>
            </div> */}
        </div>
        <div className={`${styles.summary} col-md-4 summary`}>
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <div className="row mb-3">
            <div className="col">Total items ({parseInt(data.length)})</div>
            <div className="col text-right">
              {currencyFormatter.format(summary.price, {
                code: locale.currency,
              })}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">VAT @ {vat_rate}%</div>
            <div className="col text-right">
              {currencyFormatter.format((summary.price * vat_rate) / 100, {
                code: locale.currency,
              })}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <b>TOTAL PRICE</b>
            </div>
            <div className="col text-right">
              <b>
                {currencyFormatter.format(summary.total, {
                  code: locale.currency,
                })}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Basket.propTypes = {};

Basket.defaultProps = {};

export default Basket;
