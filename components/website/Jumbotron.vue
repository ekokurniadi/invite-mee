<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <h5 class="jumbotron-info py-2">
            Buat Undangan Pernikahan Online Dalam Bentuk Website
          </h5>
          <a
            href="https://wa.me/+62895604730750?text=Hallo, Saya ingin memesan undangan pernikahan online"
            target="_blank"
          >
            <button class="btn-order mb-2">
              <span class="fa fa-whatsapp"></span>
              Pesan Sekarang
            </button>
          </a>
        </div>
        <div class="col-md-6 mt-3">
          <img src="assets/images/main-banner.png" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    async copyToClipBoard() {
      await navigator.clipboard.writeText('0895604730750').then((val) => {
        alert('Copied')
      })
    },
  },
}
</script>
