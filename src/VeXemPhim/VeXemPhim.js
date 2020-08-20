import React, { Component } from "react";
import "./VeXemPhim.css";
import { connect } from "react-redux";

class VeXemPhim extends Component {
  renderGheChon = () => {
    return this.props.arrGhe.map((hangGhe, index) => {
      let Ghe = [];
      for (let i = 0; i < hangGhe.danhSachGhe.length; i++) {
        // console.log(hangGhe.danhSachGhe[i].soGhe);
        if (hangGhe.danhSachGhe[i].daDat === true) {
          Ghe.push(
            <tr>
              <td key={i}>
                <h3>{hangGhe.danhSachGhe[i].soGhe}</h3>
              </td>
              <td>
                <h3>{hangGhe.danhSachGhe[i].gia}</h3>
              </td>
              <td>
                <button
                  onClick={() => {
                    this.props.removeChoiced(i, index);
                  }}
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          );
        }
      }
      return Ghe;
    });
  };
  renderFirstChair = () => {
    let arrLength = this.props.arrFirstChair[0].danhSachGhe.length;
    let Ghe = [];

    for (let i = 0; i < arrLength; i++) {
      Ghe.push(
        <th key={i}>
          <h1 className="firstChar">
            {this.props.arrFirstChair[0].danhSachGhe[i].soGhe}
          </h1>
        </th>
      );
    }
    return Ghe;
  };

  renderGhe = () => {
    // console.log(this.props.arrGhe);
    // console.log(this.props.arrGhe[0].danhSachGhe.soGhe);
    // console.log(this.props.arrGhe.length);
    // console.log(this.props.arrGhe[0].danhSachGhe.length);
    // console.log(this.props.arrGhe[0].danhSachGhe[0].soGhe);
    // console.log(this.props.arrGhe[0].danhSachGhe[0].daDat);
    return this.props.arrGhe.map((hangGhe, index) => {
      let Ghe = [];
      Ghe.push(
        <tr>
          <h3 key={index} className="text-danger">
            {hangGhe.hang}
          </h3>
        </tr>
      );
      for (let i = 0; i < hangGhe.danhSachGhe.length; i++) {
        if (hangGhe.danhSachGhe[i].daDat === true) {
          Ghe.push(
            <td key={i}>
              <button
                onClick={() => {
                  this.props.choicedSeat(i, index);
                }}
                className="gheDuocChon"
              >
                {hangGhe.danhSachGhe[i].soGhe}
              </button>
            </td>
          );
        } else {
          Ghe.push(
            <td>
              <button
                onClick={() => {
                  this.props.choicedSeat(i, index);
                }}
                className="ghe"
              >
                {hangGhe.danhSachGhe[i].soGhe}
              </button>
            </td>
          );
        }
      }
      return Ghe;
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(" +
            // "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            // "https://images.hdqwalls.com/wallpapers/i-am-iron-man-4k-ky.jpg" +
            "./img/bgmovie.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // filter: "brightness(50%)",
        }}
      >
        <h1 className="text-danger">Đặt vé xem phim</h1>
        <div className="screen container"></div>

        <table className="container">
          <thead>
            <tr>{this.renderFirstChair()}</tr>
          </thead>
          <tbody>{this.renderGhe()}</tbody>
        </table>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <ul className="chon-ghe">
                <li>
                  <div className="gheDuocChon center-block "></div>
                  <p className="text-danger font-weight-bold">Ghế được chọn</p>
                </li>
                {/* <li>
                  <div className="gheDangChon center-block "></div>
                  <p className="text-success font-weight-bold">Ghế đang chọn</p>
                </li> */}
                <li>
                  <div className="gheChuaChon center-block "></div>
                  <p className="text-white font-weight-bold">Ghế chưa chọn</p>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <table className="table border border-warning">
                <thead className="text-white font-weight-bold">
                  <tr>
                    <th>
                      <h3>Số ghế</h3>
                    </th>
                    <th>
                      <h3>Giá</h3>
                    </th>
                    <th>
                      <h3>Hủy</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-danger font-weight-bold">
                  {this.renderGheChon()}
                </tbody>
                <tfoot>
                  <tr className="text-danger font-weight-bold">
                    <td>
                      <h3>Tong cong</h3>
                    </td>
                    <td>
                      <h3>{this.props.total}</h3>
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    arrGhe: state.VeXemPhimReducer.arrGhe,
    arrFirstChair: state.VeXemPhimReducer.arrFirstChair,
    total: state.VeXemPhimReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    choicedSeat: (x, y) => {
      const action = {
        type: "CHOICED_SEAT",
        x,
        y,
      };
      dispatch(action);
    },
    removeChoiced: (x, y) => {
      const action = {
        type: "REMOVE_SEAT",
        x,
        y,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(VeXemPhim);
