<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>User Profile</h1>
        <div>
          <h3 class="text-center p-3">Welcome to Profile Page</h3>
          <div>
            <p class="text-center mb-5">
              Laughter is a powerful weapon. It can show that your company is a
              friendly place with a positive attitude. Humor is also an
              excellent way to grab the attention of website visitors. With
              chatbots, you can send funny welcome messages like this to
              encourage communication.
            </p>
          </div>

          <div>
            <v-card
              max-width="500px"
              class="mx-auto text-danger ghostwhite"
              elevation="20"
              style="margin-top: 50px"
            >
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong>Your First Name : {{ firstName }}</strong>
              </v-col>

              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong> Your Last Name : {{ lastName }}</strong>
              </v-col>

              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong> Your User Name : {{ userName }}</strong>
              </v-col>

              <v-col>
                <strong> Your Email : {{ email }}</strong>
              </v-col>

              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong> Your Password : {{ password }}</strong>
              </v-col>
            </v-card>
            <v-btn dark
              ><router-link class="forLinks text-white" to="/dashboard">
                -- Back To Home
              </router-link></v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      currentData: [],
    };
  },
  created() {
    this.currentData = JSON.parse(localStorage.getItem("currentData"));
    this.firstName = this.currentData.firstName;
    this.lastName = this.currentData.lastName;
    this.userName = this.currentData.userName;
    this.email = this.currentData.email;
    this.password = this.currentData.password;
  },
  methods: {
    updateProfile() {
      this.datas = JSON.parse(localStorage.getItem("datas"));
      this.index = this.datas.findIndex((x) => x.email == this.e);
      this.datas[this.index] = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userName: this.userName,
      };
      localStorage.setItem("datas", JSON.stringify(this.datas));
      localStorage.setItem(
        "currentData",
        JSON.stringify(this.datas[this.index])
      );
    },
  },
};
</script>


