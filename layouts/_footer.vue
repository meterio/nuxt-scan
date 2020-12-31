<template>
  <footer class="ftco-footer ftco-section mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <img class="logo mb-3" src="~/assets/img/logo.png" alt="Meter" />
            <p>Copyright 2019</p>
            <p>Decentralized Finance Labs inc.</p>

            <div class="wallet">
            <p>Download meter wallet</p>
            <a href="#" class="btn btn-lg btn-primary">
              <i class="fas fa-desktop"></i>Desktop Wallet
            </a>
            </div>

          </div>
        </div>

        <div class="col-md">
          <div class="row">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-5">
                <ul class="list-unstyled">
                  <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
                  <li><NuxtLink to="/pow">Blockchain</NuxtLink></li>
                  <li><NuxtLink to="/auction">Auction</NuxtLink></li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-5">
                <ul class="list-unstyled">
                  <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
                  <li><NuxtLink to="/pow">Blockchain</NuxtLink></li>
                  <li><NuxtLink to="/auction">Auction</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>

          <ul class="ftco-footer-social list-unstyled float-md-right">
            <li>
              <a href="#"
                ><span><i class="fab fa-weixin"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                ><span><i class="fab fa-twitter"></i></span
              ></a>
            </li>

            <li>
              <a href="#"
                ><span><i class="fab fa-telegram"></i></span
              ></a>
            </li>

            <li>
              <a href="#"
                ><span><i class="fab fa-discord"></i></span
              ></a>
            </li>

            <li>
              <a href="#"
                ><span><i class="fab fa-medium"></i></span
              ></a>
            </li>

             <li>
              <a href="#"
                ><span><i class="fab fa-youtube"></i></span
              ></a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.ftco-footer {
  font-size: 16px;
  background: $white;
  color: $black;
  padding: 30px 0;
  border-top: 1px solid $border_color;
  .logo {
    width: 120px;
    height: auto;
  }

  .ftco-footer-widget {
    ul {
      li {
        padding: 10px;
        text-align: right;
        a {
          color: $font_color1;
        }
      }
    }

    .wallet {
      padding-top: 16px;
      p {
        font-size: 14px;
      }

    .btn {
      font-size: 18px;
      padding: 15px 25px;
      i {
        font-size: 25px;
        margin-right: 6px;
      }
    }
    }

  }

  .ftco-heading-2 {
    font-size: 17px;
    font-weight: 400;
    color: $black;
  }
}

.ftco-footer-social {
  text-align: right;

  li {
    list-style: none;
    margin: 0 10px 0 0;
    display: inline-block;
    a {
      height: 50px;
      width: 50px;
      display: block;
      float: left;
      border-radius: 50%;
      position: relative;
      span {
        color: $font_color1;
        position: absolute;
        font-size: 26px;
        top: 7px;
        left: 10px;
      }
    }
  }
}
</style>