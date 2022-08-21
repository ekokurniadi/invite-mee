<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <img src="assets/images/dots.png" alt="" />
            <div class="box-captions">
              <p class="title">Paket</p>
              <h6 class="title-big">Harga Web Invitation</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-3" v-for="(d, index) in data" :key="index">
          <app-card-price :data="d"></app-card-price>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardPrice from '@/components/website/Card-Price.vue'
export default {
  data() {
    return {
      data: [
        {
          title: 'Paket Standar',
          jenis: 'Pack',
          caption:
            'Tersedia pilihan desain theme yang cocok untuk wedding invitation',
          harga: 'Rp. 50.000',
          isiPaket: [
            'Fitur Amplop Online',
            'Prewedding Galery',
            'Navigasi Google Maps',
            'Buku Tamu',
            'Countdown Timer',
            'Backsound',
            'Commentar',
          ],
        },
        {
          title: 'Paket Premium',
          jenis: 'Pack',
          caption: 'Bisa Custom sesuai request',
          harga: 'Rp. 350.000',
          isiPaket: [
            'Fitur Amplop Online',
            'Prewedding Galery',
            'Navigasi Google Maps',
            'Buku Tamu',
            'Countdown Timer',
            'Backsound',
            'Commentar',
          ],
        },
      ],
    }
  },
  layout: 'default',
  components: {
    'app-card-price': CardPrice,
  },
}
</script>
