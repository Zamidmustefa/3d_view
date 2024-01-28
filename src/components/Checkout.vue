<template>
  <div>
    <img src="../../public/logo.png" width="240px" style="margin-bottom: 20px;" alt=""> <br>
    <h1>CheckOut</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <b>Total:</b>
        <price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"
        ></price>
      </caption>
      <thead>
        <tr>
          <th scope="col" class="text-center">Adjust Amount</th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Quantity</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="$emit('add', item.product)" class="btn btn-info">
                +
              </button>
              <button
                @click="$emit('delete', index)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">Rs.{{ Number(item.product.price) }}</td>
          <td class="text-right">
            Rs.{{ Number(item.qty * item.product.price) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <router-link class="btn btn-sm btn-outline-info text-dark mb-4" to="/"
        >Keep Shopping</router-link
      >
    </div>
    <div class="dsf">
      <input type="text" placeholder="Name" />
      <input type="Number" placeholder="Phone Number" />
      <input type="text" placeholder="Street Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Province" />
      <input type="text" placeholder="Postal code" />
    </div>
    <div>
      <button
        class="btn btn-sm btn-outline-info text-dark mb-4 float-right"
        @click="addOrder"
      >
        {{ prom }}
      </button>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";
import {app} from "../../firebase/boot"
export default {
  name: "checkout",
  props: ["cart", "cartTotal"],
  components: {
    Price,
  },
  methods: {
    addOrder(){
      this.prom = "...Adding"
      app.firestore().collection("orders").add({
        customer: this.customer,
        cart: this.cart,
        cartTotal: this.cartTotal
      }).then(() => {
        window.location.href = '/';
      }).catch(() => {
        this.prom = "Error"
      })
    }
  },
  data() {
    return {
      prom: "Pay Now",
      customer: {
        name: "",
        phone_number: "",
        street_address: "",
        city: "",
        province: "",
        postal_code: "",
      },
    };
  },
};
</script>
<style>
.dsf {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 60%;
}
</style>
