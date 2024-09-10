<template>
  <div class="relative h-screen flex overflow-hidden">
    <!-- Left Side - Account Form -->
    <div class="w-full md:w-2/3 bg-white flex items-center justify-center">
      <div class="p-10 w-full md:w-2/3">
        <h2 class="text-4xl font-semibold mb-10 text-gray-800">Create Account</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col transition-all duration-300">
          <div class="relative w-full max-w-md">
            <input 
              type="text" 
              id="first_name" 
              name="first_name" 
              placeholder=" "
              v-model="firstName"
              class="peer w-full border rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="first_name" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your first name
            </label>
            <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
            <input 
              type="text" 
              id="mid_name" 
              name="mid_name" 
              placeholder=" " 
              v-model="midName"
              class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="mid_name" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your middle name
            </label>
            <p v-if="errors.midName" class="text-red-500 text-sm mt-1">{{ errors.midName }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
            <input 
              type="text" 
              id="last_name" 
              name="last_name" 
              placeholder=" "
              v-model="lastName"
              class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="last_name" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your last name
            </label>
            <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder=" "
              v-model="email"
              class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="email" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your email
            </label>
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
            <input 
              :type="passwordVisible ? 'text' : 'password'" 
              id="password" 
              name="password" 
              placeholder=" " 
              v-model="password"
              class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="password" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your password
            </label>
            <span 
              class="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              @click="togglePasswordVisibility"
            >
              <i :class="passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
            <input 
              :type="confirmPasswordVisible ? 'text' : 'password'" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder=" " 
              v-model="confirmPassword"
              class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
            />
            <label 
              for="confirmPassword" 
              class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Confirm your password
            </label>
            <span 
              class="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              @click="toggleConfirmPasswordVisibility"
            >
              <i :class="confirmPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
          </div>

          <div class="relative w-full max-w-md mt-6">
  <input 
    type="text" 
    id="phnumber" 
    name="phnumber" 
    placeholder=" "
    v-model="phnumber"
    class="peer w-full border border-gray-300 rounded-lg p-4 pt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
  />
  <label 
    for="phnumber" 
    class="absolute text-gray-500 transition-all duration-300 transform scale-75 top-1 left-3 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4"
  >
    Enter your phone number
  </label>
  <p v-if="errors.phnumber" class="text-red-500 text-sm mt-1">{{ errors.phnumber }}</p>
</div>

          <div class="flex gap-4 mt-10">
            <!-- Button Container -->
            <div class="w-full max-w-md flex gap-4">
              <button type="submit" class="bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex-1 transition-colors duration-300 ease-in-out">Next</button>
              <button type="button" class="bg-red-800 hover:bg-red-600 text-white py-2 px-4 rounded-md flex-1 transition-colors duration-300 ease-in-out">Cancel</button>
            </div>
          </div>
        </form>
        <p class="mt-6 text-sm text-gray-500">Already have an account? <a href="#" class="text-blue-500 hover:underline">Login here</a></p>
      </div>
    </div>
    
    <!-- Right Side - Full Image -->
    <div class="absolute right-0 top-0 bottom-0 hidden md:block md:w-1/3">
      <img src="../assets/Images/Side.jpg" alt="Right Side Image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      midName: '',
      lastName: '',
      email: '',
      phnumber: '',
      password: '',
      confirmPassword: '',
      passwordVisible: false,
      confirmPasswordVisible: false,
      errors: {
        firstName: '',
        midName: '',
        lastName: '',
        email: '',
        phnumber: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    async validateForm() {
      this.errors = {
        firstName: '',
        midName: '',
        lastName: '',
        email: '',
        phnumber: '',
        password: '',
        confirmPassword: ''
      };

      // Validate First Name
      if (!this.firstName.trim()) {
        this.errors.firstName = 'First name is required.';
      }

      // Validate Middle Name
      if (!this.midName.trim()) {
        this.errors.midName = 'Middle name is required.';
      }

      // Validate Last Name
      if (!this.lastName.trim()) {
        this.errors.lastName = 'Last name is required.';
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email.trim()) {
        this.errors.email = 'Email is required.';
      } else if (!emailPattern.test(this.email)) {
        this.errors.email = 'Please enter a valid email.';
      }

      // Validate Phone Number
      const phoneNumber = String(this.phnumber).trim(); // Ensure it's a string
      if (!phoneNumber) {
        this.errors.phnumber = 'Phone number is required.';
      }

      // Password validation: capital letter, number, special character, 6-11 characters
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,11}$/;
      if (!this.password.trim()) {
        this.errors.password = 'Password is required.';
      } else if (!passwordPattern.test(this.password)) {
        this.errors.password = 'Password must be 6-11 characters and include a capital letter, number, and special character.';
      }

      // Confirm Password validation
      if (!this.confirmPassword.trim()) {
        this.errors.confirmPassword = 'Confirm password is required.';
      } else if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match.';
      }

      // Return whether form is valid
      return Object.keys(this.errors).every(key => !this.errors[key]);
    },

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    toggleConfirmPasswordVisibility() {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    },

    async handleSubmit() {
      console.log('Starting form validation...');

      const isValid = await this.validateForm();

      console.log('Form is valid:', isValid);
      console.log('Errors:', this.errors);

      if (isValid) {
        // Form is valid, send data to API
        const formData = {
          firstName: this.firstName,
          midName: this.midName,
          lastName: this.lastName,
          email: this.email,
          phnumber: this.phnumber,
          password: this.password,
          confirmPassword: this.confirmPassword
        };

        try {
          const response = await fetch('https://your-api-endpoint.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Form submitted successfully!', data);
          // Handle success response
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          // Handle error response
        }
      } else {
        // Form has errors
        console.log('Form validation failed.');
      }
    }
  }
};
</script>



<style scoped>
/* You can add more styles here if needed */
/* Hide spinner buttons in Chrome, Safari, and newer Edge */
.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide spinner buttons in Firefox */
.no-spinners {
  -moz-appearance: textfield;
}

/* Hide spinner buttons in older versions of Edge */
.no-spinners {
  appearance: none;
z-appearance: textfield; /* Firefox */
}
</style>
