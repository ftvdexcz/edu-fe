<template>
  <div>
    <nav>
      <ul>
        <nav-item to="/organization" title="Quản lý tổ chức">
          <UserGroupIcon></UserGroupIcon>
        </nav-item>
        <nav-item to="/users" title="Quản lý người dùng">
          <UserIcon></UserIcon>
        </nav-item>
        <nav-item to="/cameras" title="Quản lý camera">
          <CameraIcon></CameraIcon>
        </nav-item>
        <nav-item to="/feedback" title="Phản hồi khách hàng">
          <ChatBubbleLeftRightIcon></ChatBubbleLeftRightIcon>
        </nav-item>
        <nav-item to="/" title="Báo cáo">
          <ClipboardDocumentIcon></ClipboardDocumentIcon>
        </nav-item>

        <nav-item to="/identified-report" title="Lịch sử nhận diện" pl>
          <ListBulletIcon></ListBulletIcon>
        </nav-item>

        <nav-item to="/monthly-report" title="Báo cáo theo tháng" pl>
          <CalendarDaysIcon></CalendarDaysIcon>
        </nav-item>

        <nav-item to="/daily-report" title="Báo cáo theo ngày" pl>
          <CalendarIcon></CalendarIcon>
        </nav-item>

        <nav-item to="/inout-report" title="Lịch sử chấm công" pl>
          <EyeIcon></EyeIcon>
        </nav-item>
      </ul>
    </nav>
  </div>
</template>

<script>
import {
  UserGroupIcon,
  UserIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  ListBulletIcon,
  CalendarDaysIcon,
  CalendarIcon,
  EyeIcon,
} from '@heroicons/vue/24/outline';

import NavItem from '../ui/NavItem.vue';

export default {
  components: {
    UserGroupIcon,
    UserIcon,
    CameraIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentIcon,
    ListBulletIcon,
    CalendarDaysIcon,
    CalendarIcon,
    EyeIcon,
    NavItem,
  },
};
</script>

<style scoped>
nav {
  min-width: 24rem;
  background-color: white;
}

svg {
  height: 2.4rem;
  width: 2.4rem;
  display: block;
}
</style>
