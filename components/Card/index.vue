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

  <article ref="card-wrapper" class="flex flex-col w-[350px] h-[450px] rounded-xl overflow-hidden shadow-xl">
    <div class="w-full h-[197px]">
      <img ref="card-image" :src="image" :alt="title" class="w-full h-full object-cover object-center" />
    </div>
    <div class="flex-auto flex flex-col py-6 px-8">
      <h1 ref="card-title" class="font-poppins font-semibold text-2xl text-[#1F1F1F] leading-9 mb-2">
        {{ title }}
      </h1>
      <p ref="card-description" class="flex-auto font-poppins font-normal text-sm text-[#5F5F5F] leading-5">
        {{ description }}
      </p>
      <button
        ref="card-button"
        class="flex w-full justify-center py-3 rounded-xl font-poppins font-bold text-white text-base leading-6"
        :class="favorite ? 'bg-[#FE564B]' : 'bg-[#FE964B]'"
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
    },
  },
}
</script>
