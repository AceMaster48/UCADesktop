<template>
    <div class="h-screen flex bg-white">
      <!-- Left side: Login Form (takes full height and width on small screens, and half width on larger screens) -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <div class="w-full max-w-md p-8 space-y-6">
          <h2 class="text-3xl font-bold text-center text-gray-900">Login</h2>
          <form @submit.prevent="submitLogin" class="space-y-4">
            <!-- Phone Number Input -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <div class="relative mt-1">
                <select v-model="selectedCountryCode" class="absolute inset-y-0 left-0 w-16 px-2 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option v-for="(code, name) in countries" :key="code" :value="code">{{ code }}</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  v-model="phone"
                  placeholder="Enter phone number"
                  class="block w-full pl-20 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
  
            <!-- Password Input -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="relative mt-1">
                <input
                  :type="passwordVisible ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  placeholder="Enter password"
                  class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <span @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                  <i :class="passwordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                </span>
              </div>
            </div>
  
            <!-- Submit Button -->
            <button type="submit" class="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Login
            </button>
          </form>
        </div>
      </div>
  
      <!-- Right side: Full Height Image -->
      <div class="absolute right-0 top-0 bottom-0 hidden md:block md:w-1/3">
      <img src="../assets/Images/Side.jpg" alt="Right Side Image" class="w-full h-full object-cover" />
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phone: '',
        selectedCountryCode: '+1', // default country code
        password: '',
        passwordVisible: false,
        countries: {
          "+1": "United States",
          "+44": "United Kingdom",
          "+91": "India",
          "+81": "Japan",
          // Add more countries with their respective codes
        }
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      },
      submitLogin() {
        console.log('Phone:', this.selectedCountryCode + this.phone);
        console.log('Password:', this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional FontAwesome for the eye icon */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  </style>
  