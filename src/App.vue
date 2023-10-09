<template>
  <div class="main">
    <div v-if="scrollIsVisible">
      <el-backtop
        :right="25"
        :bottom="50"
        :visibility-height="0"
        @click="scroll"
      />
    </div>

    <the-header></the-header>
    <div class="container">
      <the-navigation></the-navigation>
      <div class="content-wrapper" ref="content">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheNavigation from '@/components/layout/TheNavigation.vue';
import { onMounted, ref } from 'vue';
import { ElBacktop } from 'element-plus';

export default {
  components: { TheHeader, TheNavigation, ElBacktop },
  setup() {
    const content = ref(null);
    const scrollIsVisible = ref(false);

    function scroll() {
      content.value.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onMounted(() => {
      // không dùng watch được vì content.value không phải ref, dùng toRef thì ban đầu content là null -> error
      content.value.addEventListener('scroll', () => {
        console.log(content.value.scrollTop);
        if (content.value.scrollTop > 360) {
          scrollIsVisible.value = true;
        } else {
          scrollIsVisible.value = false;
        }
      });
    });

    return {
      scroll,
      content,
      scrollIsVisible,
    };
  },
};
</script>
