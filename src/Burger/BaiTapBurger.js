import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";

class BaiTapBurger extends Component {
  renderBreadMid = () => {
    // console.log(this.props.burger);
    let { burger } = this.props;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }
      return breadMid;
    });
  };
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([menuItem, price], index) => {
      return (
        <tr key={index}>
          <td>{menuItem}</td>
          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(menuItem, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {burger[menuItem]}
            <button
              onClick={() => {
                this.props.addBreadMid(menuItem, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[menuItem] * price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-danger">Bai Tap Burger</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-success">Burger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h2 className="text-danger">Menu</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>thuc an</th>
                  <th></th>
                  <th>gia</th>
                  <th>Thanh tien</th>
                </tr>
              </thead>
              {this.renderMenu()}
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tong cong</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(BaiTapBurger);
