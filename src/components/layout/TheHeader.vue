<template>
  <header>
    <nav>
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="brand" />
        </router-link>
      </div>
      <div class="navbar-user">
        <span>Xin chào, Admin123</span>
        <span class="navbar-dropdown">
          <ChevronDownIcon />
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
export default {
  components: {
    ChevronDownIcon,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #00e4d0, #5983e8);
}
.navbar-brand {
  min-width: 24rem;
  background-color: white;
}

img {
  height: 6.4rem;
}

.navbar-brand a {
  display: block;
  margin: 0 auto;
  width: fit-content;
}

.navbar-user {
  padding: 0 5.6rem;
  font-size: 1.4rem;
  color: white;
}

svg {
  height: 1.7rem;
  width: 1.7rem;
  position: absolute;
}

.navbar-dropdown {
  position: relative;
  margin-left: 2.4rem;
}
</style>
