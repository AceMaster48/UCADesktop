import { createRouter, createWebHistory } from 'vue-router';
import Register from '../Pages/Register.vue'; // Adjust path as needed
import Home from '../Pages/Home.vue';
import Login from '../Pages/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path:'/register',
    name:'Register',
    component: Register,
  },

  {
    path:'/login',
    name:'Login',
    component: Login,
  }
  // Additional routes can be added here
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Ensure this line is correct
});

export default router;
