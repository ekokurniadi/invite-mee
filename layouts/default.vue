<template>
  <div>
    <app-header></app-header>
    <Nuxt />
    <a
      class="btn-floating mb-5"
      href="https://wa.me/+62895604730750?text=Hallo, Saya ingin memesan undangan pernikahan online"
      target="_blank"
    >
      <span
        ><div class="chatImgWrapper mr-2">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/57d0f05a.svg"
            alt=""
          />
        </div>
        Chat</span
      >
    </a>
  </div>
</template>
<style>
a.btn-floating {
  text-decoration: none;
  display: inline-block;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  line-height: 24px;
  text-indent: 0;
  width: auto;
  background-position: 50%;
  border: none;
  outline: medium none currentcolor;
  cursor: pointer;
  position: fixed;
  right: 10px;

  bottom: -80px;
  height: auto;
  padding: 6px 20px;
  box-shadow: 0 2px 6px 0 #b5bbc5;
  box-shadow: 0 2px 6px 0 var(--N150, #b5bbc5);
  color: #03ac0e;
  color: var(--G500, #03ac0e);
  border-radius: 20px;
  font-size: 16px;
  z-index: 100;
  transition: all 0.2s ease-in-out 0s;
  transform: translateY(-40px);
  opacity: 1;
  background-color: #fff;
}
img {
  vertical-align: middle;
  border-style: none;
}
.btn-floating span {
  display: flex;
  align-items: center;
  -moz-box-align: center;
}
</style>
<script>
import Header from '@/components/website/Header.vue'

export default {
  components: {
    'app-header': Header,
  },
}
</script>
