<template>
  <li>
    <a @click.prevent="navigation" :to="to" :href="to" v-if="isLink">
      <slot></slot>
      <span>{{ title }}</span>
    </a>
    <router-link v-else :to="to" :class="{ pl: pl }">
      <slot></slot>
      <span>{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    to: {
      type: String,
      required: true,
      default: '/',
    },
    title: {
      type: String,
      required: true,
    },
    pl: Boolean,
    isLink: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const navigation = () => {
      router.push(props.to);
    };

    return {
      navigation,
    };
  },
};
</script>

<style scoped>
a {
  color: #4a4a4a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  padding: 1.4rem 0 1.4rem 3.2rem;
}

li {
  transition: background-color 0.3s ease-out;
}

li:hover {
  background-color: #f5f4f7;
}

a.router-link-active {
  color: #308ee0;
}

span {
  vertical-align: middle;
  font-size: 1.4rem;
}

.pl {
  padding-left: 4.8rem;
}
</style>
