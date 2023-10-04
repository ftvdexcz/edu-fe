<template>
  <form class="form-filter">
    <div class="form-controll">
      <label for="username">Tên</label>
      <input class="input" type="text" id="username" />
    </div>
    <div class="form-controll">
      <label for="month">Tháng</label>
      <input class="input" type="text" id="month" />
    </div>
  </form>
</template>

<style scoped>
.form-filter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.6rem;
  margin-top: 2.4rem;
  column-gap: 6.4rem;
}

.form-controll {
  display: flex;
  gap: 3.2rem;
}

label {
  display: block;
  line-height: 1.5;
  width: 15%;
  font-size: 1.4rem;
}

.input {
  display: block;
  flex: 1;
  line-height: 1.5;
  border: 1px solid #f2f2f2;
}
</style>
