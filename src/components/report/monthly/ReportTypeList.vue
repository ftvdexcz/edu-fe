<template>
  <div class="report-types">
    <div class="report-type">
      <div class="square" style="background-color: rgb(251, 231, 198)"></div>
      <span>" Đi muộn "</span>
    </div>
    <div class="report-type">
      <div class="square" style="background-color: rgb(168, 216, 168)"></div>
      <span>" Về sớm "</span>
    </div>
    <div class="report-type">
      <div class="square" style="background-color: rgb(48, 144, 192)"></div>
      <span>" Đi muộn, về sớm "</span>
    </div>
    <div class="report-type">
      <div class="square" style="background-color: rgb(241, 241, 241)"></div>
      <span>" Không có dữ liệu "</span>
    </div>
    <div class="report-type">
      <div class="square" style="background-color: rgb(240, 120, 72)"></div>
      <span>" Đúng giờ "</span>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.square {
  width: 2rem;
  height: 2rem;
  display: inline-block;
}

.report-type {
  min-width: 150px;
}

.report-type > span {
  display: inline-block;
  margin-left: 1.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
}

.report-types {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 1.6rem 0;
}
</style>
