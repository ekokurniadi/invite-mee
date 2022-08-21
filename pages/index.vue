<template>
  <div>
    <app-jumbotron></app-jumbotron>
    <app-theme></app-theme>
  </div>
</template>

<script>
import Jumbotron from '@/components/website/Jumbotron.vue'
import Theme from '@/components/website/Theme.vue'
export default {
  components: {
    'app-jumbotron': Jumbotron,
    'app-theme': Theme,
  },
}
</script>
