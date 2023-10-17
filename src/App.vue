<template>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex';
import store from '@/store/index';
import setupInterceptors from '@/services/axiosInterceptors';

setupInterceptors(store);

export default {
  setup() {
    const store = useStore();

    store.dispatch('auth/tryLogin');
  },
};
</script>
