<template>
    <header>
      <!-- Header Start -->
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div
              class="menu-wrapper d-flex align-items-center justify-content-between"
            >
              <!-- Logo -->
              <div class="logo">
                <NuxtLink to="/">
                  ><img src="~/assets/img/logo.png" alt=""
                /></NuxtLink>
              </div>
              <div class="search-bar">
              <SearchInput size="sm" />
              </div>
              <!-- Main-menu -->
              <div class="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
                    <li>
                      <a href="#">Blockchain <i class="fas fa-angle-down"></i></a>
                      <ul class="submenu">
                        <li><NuxtLink to="/pos">PoS Chain</NuxtLink></li>
                        <li><NuxtLink to="/pow">PoW Chain</NuxtLink></li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">Resources <i class="fas fa-angle-down"></i></a>
                      <ul class="submenu">
                        <li><NuxtLink to="/validator">Validator</NuxtLink></li>
                      </ul>
                    </li>

                  </ul>
                </nav>
              </div>
              <!-- Header-btn -->
              <!-- <div class="header-btns d-none d-lg-block f-right">
                <a href="#" class="btn">EN</a>
              </div> -->
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
    </header>
</template>

<script>
import SearchInput from "~/components/SearchInput.vue";

export default {
    components: {
        SearchInput
    }
}
</script>

<style  lang="scss" scoped>
    .logo {
        img {
            height: 42px;
            width: 120.3px;
        }
    }

    .search-bar {
        height: 40px;
        width: 350px;
    }
</style>