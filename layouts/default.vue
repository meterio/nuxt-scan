<template>
  <div>
    <Header />

    <main>
      <!-- Hero Area Start-->
      <div class="slider-area">
        <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-9">
                <!-- Hero Caption -->
                <div class="hero__caption">
                  <h1>Meter Blockchain Explorer</h1>
                </div>

                <!-- <div class="search-content">
                  <SearchInput />
                </div> -->
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Hero Area End-->

      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/layouts/header.vue";
import Footer from "~/layouts/footer.vue";
// import SearchInput from "~/components/SearchInput.vue";

export default {
  components: {
    Header,
    Footer,
    // SearchInput
  },
};
</script>

