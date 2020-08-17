import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="header">
          <div class="header__logo">
            <a href="#">
              <img class="web-logo img-fluid" src="./img/web-logo.png" />
            </a>
          </div>
          <div class="header__center">
            <a class="text-dark" href="#">
              Lịch Chiếu
            </a>
            <a class="text-dark" href="#">
              Cụm rạp
            </a>
            <a class="text-dark" href="#">
              Tin tức
            </a>
            <a class="text-dark" href="#">
              Ứng dụng
            </a>
          </div>
          <div class="header__account img-circle">
            <a href="#">
              <img class="rounded-circle" src="./img/avatar.png" />
              <p class="text-dark mx-4">Đăng Nhập</p>
            </a>
          </div>
          <div class="header__location mx-5 p-2">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-dark"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hồ Chí Minh
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        Hà Nội
                      </a>
                      <a class="dropdown-item" href="#">
                        Đà Nẵng
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
