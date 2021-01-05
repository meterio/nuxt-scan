<template>
  <div>
    <Header />

    <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div>
          <Nuxt />
        </div>
      </div>
      <!-- /End replace -->
    </div>
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

