<template>
  <main class="max-w-screen-lg mx-auto pt-20">
    <Card
      :key="1"
      title="My Custom Card"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente corrupti corporis sed aspernatur! Facere."
      image="https://picsum.photos/600"
    />
  </main>
</template>

<script>
import Card from '../components/Card'

export default {
  components: {
    Card,
  },
}
</script>
