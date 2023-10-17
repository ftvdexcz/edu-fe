<template>
  <section class="page_404">
    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <h1 class="text-center">404</h1>
            <div class="four_zero_four_bg"></div>

            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>

              <router-link to="/" class="link_404">Go to Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  text-align: center;
  font-size: 1.8rem;
}

.text-center {
  text-align: center;
  margin-bottom: 3.2rem;
  font-size: 80px;
}
</style>
