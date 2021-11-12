<template>
  <!--
  Acceptance Criteria
  -------------------
  1.  Komponen dapat menampilkan gambar sesuai props yang diberikan
  2.  Komponen dapat menampilkan judul sesuai props yang diberikan
  3.  Komponen dapat menampilkan deskripsi sesuai props yang diberikan
  4.  Ketika user mengklik tombol `Add to Favorite`,
      tombol akan berubah warna dan label tombol berubah
      menjadi `Remove from Favorite`
  -->

  <article ref="card-wrapper" class="card">
    <div class="card__image-wrapper">
      <img ref="card-image" :src="image" :alt="title" class="card__image" />
    </div>
    <div class="card__body">
      <h1 ref="card-title" class="card__title">
        {{ title }}
      </h1>
      <p ref="card-description" class="card__description">
        {{ description }}
      </p>
      <button
        ref="card-button"
        :class="{
          'card__button': true,
          'card__button--favorite': favorite,
        }"
        @click="toggleFavorite"
      >
        {{ favorite ? 'Remove from Favorite' : 'Add to Favorite' }}
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardId: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      favorite: false,
    }
  },
  methods: {
    toggleFavorite() {
      this.favorite = !this.favorite
      this.$emit('favorite', this.cardId)
    },
  },
}
</script>

<style scoped>
.card {
  @apply flex flex-col w-[350px] h-[450px] rounded-xl overflow-hidden shadow-xl;
}

.card__image-wrapper {
  @apply w-full h-[197px];
}

.card__image {
  @apply w-full h-full object-cover object-center;
}

.card__body {
  @apply flex-auto flex flex-col py-6 px-8;
}

.card__title {
  @apply font-poppins font-semibold text-2xl text-[#1F1F1F] leading-9 mb-2;
}

.card__description {
  @apply flex-auto font-poppins font-normal text-sm text-[#5F5F5F] leading-5;
}

.card__button {
  @apply flex w-full justify-center py-3 rounded-xl font-poppins font-bold text-white text-base leading-6 bg-[#FE964B];
}

.card__button--favorite {
  @apply bg-[#FE564B];
}
</style>
