<template>
  <form action="#" :class="size === 'lg' ? 'search-box' : 'search-box sm'">
    <div class="input-form">
      <input type="text" placeholder="Search Tx/Blocks/Address" />
      <!-- icon search -->
      <div class="search-form">
        <button><i class="fas fa-search"></i></button>
      </div>
      <!-- icon search -->
      <!-- <div class="world-form">
        <i class="fas fa-globe"></i>
      </div> -->
    </div>
  </form>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "lg",
    },
  },
};
</script>

<style scoped>
/* // form.search-box {
//   height: 100%;

//   &.sm {
//     input {
//       border-radius: 10px !important;
//       font-size: 14px !important;
//       padding: 9px 15px !important;
//     }

//     .search-form {
//       right: 5px !important;
//       top: 5px !important;
//       button {
//         font-size: 10px !important;
//         border-radius: 8px !important;
//         width: 30px !important;
//         height: 30px !important;
//       }
//       i {
//         position: relative;
//         left: 0;
//         top: 0;
//       }
//     }
//   }

//   .input-form {
//     position: relative;
//     height: 100%;
//     input {
//       height: 100%;
//       width: 100%;
//       color: #777777;
//       font-size: 18px;
//       font-weight: 400;
//       padding: 9px 33px 9px 33px;
//       border: 1px solid $gray-400;
//       border-radius: 15px;
//       @media #{$xs} {
//         margin-bottom: 20px;
//       }
//       @media #{$sm} {
//         padding: 9px 33px 9px 33px;
//       }
//       &::placeholder {
//         color: #616875;
//         @media #{$xs} {
//           font-size: 13px;
//         }
//       }
//     }
//     // Search
//     .search-form {
//       position: absolute;
//       right: 9px;
//       top: 8px;
//       button {
//         background: $primary;
//         text-align: center;
//         color: #fff;
//         font-size: 25px;
//         border-radius: 15px;
//         width: 50px;
//         height: 50px;
//         display: block;
//         cursor: pointer;
//         border: 0;
//       }
//       i {
//         position: relative;
//         left: 0;
//         top: 0;
//       }
//     }
//   }
// } */
</style>