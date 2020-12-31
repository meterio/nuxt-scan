<template>
<div>
  <h1>Hello world!</h1>
  <div>{{allMetrics.mtrg.price}}</div>
  </div>
</template>

<script>

import { getAllMetrics } from '@/api/metrics';

export default {
  async asyncData() {
    const allMetrics = await getAllMetrics();
    return { allMetrics };
  },
};
</script>