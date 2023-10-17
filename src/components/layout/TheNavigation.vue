<template>
  <div>
    <nav>
      <ul>
        <nav-item to="/organization" title="Quản lý trường">
          <UserGroupIcon></UserGroupIcon>
        </nav-item>
        <nav-item to="/teachers" title="Quản lý giáo viên">
          <UserIcon></UserIcon>
        </nav-item>
        <nav-item to="/requests" title="Duyệt đăng ký nghỉ">
          <CheckBadgeIcon></CheckBadgeIcon>
        </nav-item>
        <nav-item to="/stats" title="Thống kê theo tháng">
          <ChatBubbleLeftRightIcon></ChatBubbleLeftRightIcon>
        </nav-item>
        <nav-item to="/" isLink title="Báo cáo">
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

        <nav-item to="/leave" title="Đăng ký nghỉ">
          <DocumentMinusIcon></DocumentMinusIcon>
        </nav-item>
      </ul>
    </nav>
  </div>
</template>

<script>
import {
  UserGroupIcon,
  UserIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  ListBulletIcon,
  CalendarDaysIcon,
  CalendarIcon,
  DocumentMinusIcon,
} from '@heroicons/vue/24/outline';

import NavItem from '../ui/NavItem.vue';

export default {
  components: {
    UserGroupIcon,
    UserIcon,
    CheckBadgeIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentIcon,
    ListBulletIcon,
    CalendarDaysIcon,
    CalendarIcon,
    DocumentMinusIcon,
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
