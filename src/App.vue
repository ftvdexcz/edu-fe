<template>
  <div class="main">
    <the-header></the-header>
    <div class="container">
      <the-navigation></the-navigation>
      <div class="content-wrapper">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheNavigation from './components/layout/TheNavigation.vue';

export default {
  components: { TheHeader, TheNavigation },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

ul,
ol {
  list-style-type: none;
}

input,
button,
textarea {
  outline: none;
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: white;
  color: #212529;
  line-height: 1;
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 6.4rem);
}

.content-wrapper {
  background-color: #f2f8f9;
  flex: 1;
  padding: 2rem 3.6rem 1.6rem 3.6rem;
  overflow-y: scroll;
}

.content {
  background-color: white;
  min-height: 30rem;
  padding: 2.8rem 3.2rem 1.6rem 3.2rem;
}

h1 {
  font-size: 2.6rem;
  font-weight: 500;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
