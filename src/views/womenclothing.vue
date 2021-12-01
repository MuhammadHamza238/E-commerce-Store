
<template>
  <v-app id="inspire">
    <v-app-bar app src="nav.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><img
      class="mb-1"
      src="data:image/png;base64,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"
      alt=""
      width="250"
      height="65"
     
    /></v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn dark class="mr-2"
          ><router-link class="forLinks text-white" to="/dashboard">
            Home
          </router-link></v-btn
        >
        <v-btn dark
          ><router-link class="forLinks text-white" to="/signin">
            Logout
          </router-link>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary class="sideBar">
      <h5><li class="mt-5 pb-3">Shop by Category</li></h5>
      <ul>
        <li class="pb-2">
          <router-link class="forLinks" to="/menclothing"
            >Men Clothing</router-link
          >
        </li>
        <li class="pb-2">
          <router-link class="forLinks" to="/womenclothing"
            >Women Clothing</router-link
          >
        </li>
        <li class="pb-2">
          <router-link class="forLinks" to="/electronics"
            >Electronics</router-link
          >
        </li>
        <li class="pb-2">
          <router-link class="forLinks" to="/jewellery">Jewellery</router-link>
        </li>
      </ul>
      <h5 style="margin-top: 30px; margin-bottom: 10px">
        <li>Featured Brands</li>
      </h5>
      <ul>
        <li>LimeLight</li>
        <li>GUCCI.</li>
        <li>ZARA Man.</li>
        <li>UNIQLO.</li>
        <li>Alkaram Studio.</li>
        <li>Khaadi.</li>
        <li>Warda</li>
        <li>Gul Ahmed.</li>
      </ul>

      <div>
        <h5 class="mt-4">
          <li>
            <router-link class="forLinks" to="/checkout">
              Checkout
            </router-link>
          </li>
        </h5>
      </div>
      <h5 style="margin-top: 30px; margin-bottom: 20px">
        <li>Profile Setting</li>
      </h5>
      <ul>
        <li>
          <router-link class="forLinks" to="/profile">
            Show Profile
          </router-link>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            class="mb-5"
            v-for="womenclothing in womenclothings"
            :key="womenclothing.id"
            cols="4"
          >
            <v-card style="padding: 15px">
              <v-card
                :loading="loading"
                height="450px"
                max-width="374"
                elevation="20"
                class="responsive"
              >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>
                <v-img
                  contain
                  height="250"
                  :src="womenclothing.image"
                  class="p-2"
                ></v-img>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <u
                      ><v-card-text>{{ womenclothing.title }}</v-card-text></u
                    > </v-row
                  ><br />
                  <p style="color: darkgoldenrod">
                    <strong>Category Women's clothing</strong>
                  </p>

                  <p style="color: darkgoldenrod">
                    <strong>Price: ${{ womenclothing.price }}</strong>
                  </p>
                  <div>
                    <p>
                      {{ womenclothing.description }}
                    </p>
                  </div>
                  <v-btn dark class="ml-2 mb-2">+ Add to Cart</v-btn>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
      <v-footer dark padless style="margin-top: 100px">
      <v-card flat tile class="dark lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>E-Commerce Store</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import Vue from "vue";

export default {
  name: "womenclothing",
  data: () => {
    return {
      drawer: null,
      loading: false,
      selection: 1,
      womenclothings: [],
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        (this.womenclothings = response.data), console.log(response.data);
      });
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style >
.responsive {
  overflow-x: scroll;
  overflow-x: hidden;
}
.sideBar {
  padding: 20px;
}
ul > li {
  color: crimson;
}
</style>

