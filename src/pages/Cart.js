import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="header2-items-wrapper">
        <h3 className="header2-h3">Varukorg</h3>
      </div>
      <div style={{}} className="cart-container">
        {cart > 0 ? (
          <>
            <div className="cart-items">
              <div
                style={{
                  alignItems: "center",
                }}
                className="cost-items cart-item"
              >
                <p>Ärtig spenatsoppa</p>
                <div
                  style={{
                    display: "flex",
                    width: "150px",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "7px",
                  }}
                >
                  <button
                    style={{
                      margin: "0 5px",
                      fontSize: 22,
                      background: 0,
                      border: 0,
                      padding: 7,
                      paddingBottom: 10,
                    }}
                    onClick={() => (cart > 0 ? dispatch(decrement()) : 0)}
                  >
                    -
                  </button>
                  <span>{cart}</span>
                  <button
                    style={{
                      margin: "0 3px",
                      marginRight: "10px",
                      fontSize: 22,
                      background: 0,
                      border: 0,
                      padding: 5,
                      paddingBottom: 10,
                    }}
                    onClick={() => dispatch(increment())}
                  >
                    +
                  </button>
                  <p style={{ marginRight: "10px", marginLeft: "4px" }}>90kr</p>
                </div>
              </div>
              {/* <div className="cost-items cart-item">
              <p>Pepsi 33cl</p> <p>15kr</p>
            </div>
            <div className="cost-items cart-item">
              <p>Vitlöksbröd</p> <p>15kr</p>
            </div> */}
            </div>
          </>
        ) : null}
        <div
          style={{ margin: "0 8px", marginTop: 22 }}
          className="cost-wrapper"
        >
          <div className="cost-items">
            {cart > 0 ? (
              <>
                <p>Mat</p> <p>{`${90 * cart}kr`}</p>
              </>
            ) : null}
          </div>
          <div className="cost-items">
            {/* <p>Extra tillägg</p> <p>30kr</p> */}
          </div>
          <div className="cost-items">
            <p>Leverans</p> <p>39kr</p>
          </div>
          <hr />
          <div className="cost-items">
            <p>total</p> <p>{`${39 + 90 * cart}kr`}</p>
          </div>
        </div>

        <Link
          className="cart-button"
          style={{
            color: "black",
            textDecoration: 0,
            textAlign: "center",
          }}
          to="/leveransanvisningar"
        >
          Forstätt till leveransanvisningar
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
