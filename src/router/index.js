import { createRouter, createWebHistory } from 'vue-router';
import Appointment from '@/views/Appointments.vue';

// LAYOUTS
import SideNav from '@/layouts/TheSidenav.vue';
import TopNav from '@/layouts/TheTopnav.vue';

const routes = [
  {
    path: '/',
    name: 'Appointment',
    components: {
      sidenav: SideNav,
      topnav: TopNav,
      default: Appointment,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
