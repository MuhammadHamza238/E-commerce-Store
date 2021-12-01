import Vue from "vue";
import VueRouter from "vue-router";
import VueSimpleAlert from "vue-simple-alert";
import store from "../store";


Vue.use(VueSimpleAlert);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: () =>
      import("../components/signup.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import("../views/signin.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import("../views/dashboard.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
  },
  {
    path: "/product/:id",
    name: "product",
    props: true,
    component: () =>
      import("../views/product.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
  
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import("../components/checkout.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
  
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../views/profile.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
  
  },
  {
    path: "/updateprofile",
    name: "updateprofile",
    component: () =>
      import("../views/updateprofile.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
  
  },
  {
    path: "/menclothing",
    name: "menclothing",
    component: () =>
      import("../views/menclothing.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
    
  },
  {
    path: "/womenclothing",
    name: "womenclothing",
    component: () =>
      import("../views/womenclothing.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
    
  },
  {
    path: "/electronics",
    name: "electronics",
    component: () =>
      import("../views/electronics.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
 
  },
  {
    path: "/jewellery",
    name: "jewellery",
    component: () =>
      import("../views/jewellery.vue"),
      beforeEnter:(to,from,next) =>{
        if(store.state.authenticated == false){
          next(false);
        }
        else{
          next();
        }
      }
 
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth && !store.getter[`auth/${IS_USER_AUTHENTICATE_GETTER}`]) 
//   {
//     next('/signin');
//   } else if (!to.meta.auth && store.getter[`auth/${IS_USER_AUTHENTICATE_GETTER}`])
//   {
//     next('/dashboard');
//   }
//   else
//   {
//     next(); 
//   }
// });

export default router;
