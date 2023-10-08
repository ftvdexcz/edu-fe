<template>
  <form class="form-filter">
    <slot></slot>

    <div class="form-actions">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<style>
.form-filter {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6.4rem;
  row-gap: 3.2rem;
}

.form-controll label {
  display: block;
  line-height: 2;
  font-size: 1.4rem;
  margin-right: 1.6rem;
  min-width: 10rem;
}

.form-actions {
  grid-column: span 2;
  text-align: center;
  color: #34a06a;
}

.form-controll {
  display: flex;
}
</style>
