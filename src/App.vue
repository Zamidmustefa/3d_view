/* eslint-disable no-undef */
<template>
  <div id="app" class="container mt-5">
    <router-view :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" :sliderStatus="sliderStatus"
      :maximum.sync="maximum" :products="products" @add="addItem" @delete="deleteItem"
      @toggle="toggleSliderStatus"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      maximum: 5000,
      sliderStatus: true,
      cart: [],
      products: null,
    };
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },

    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },

  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },

    addItem: function (product) {
      var whichProduct;
      var existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
  },

  mounted() {
    let data = [
      {
        id: "532",
        name: "Electric Turbo Fan Model with Functional Reverse Thrusting",
        description:
          "Print your own Electric Turbo Fan Model with Functional Reverse Thrusting! It utilises a brushless motor for the 130mm bypass fan and a MG996R Servo to operate the reverse thrusting function. All controlled by an Arduino NANO.",
        price: "3000",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/721131/images/5652773_b4afb7d0-0a5f-44f4-8984-fea65f81c6f9_cab9ba64-bba5-4e81-87b8-ca3e374ff0d7/thumbs/inside/1600x1200/jpg/img_1811.webp",
      },
      {
        id: "12",
        name: "RC CAR -DODGE CHARGER RT 1970 FF",
        description: `Model scale 1:10 Rear- wheel drive 
        Length: 52, 8 cm
        Wheelbase: 29, 6 cm
        Width: 19, 5 cm
        Track: 15 cm
        Height: 13, 7 cm
        Weight: 3 Kg(With 2s 5200mah battery)
        Battery tray Dimension: 140x27x50`,
        price: "1000",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/698155/images/5483309_0999ebf1-1cde-4b31-b8cc-ac849108703b_a2bdf482-1e7b-49bf-bcbf-e61e2e0aa0f9/thumbs/inside/1600x1200/jpg/dodge-assembly-picture-resize.webp",
      },
      {
        id: "2",
        name: "CURL | Phone Stand",
        description: `Meet our CURL phone stand, designed for fast-print (~1h) and robustness thanks to its thin and wavy profile.

The charging cable can run under the stand and plug to your phone with ease.

Print it in plain colour, or add a stripe as on the pictures, which really draws attention to the unique curve of the phone stand.

`,
        price: "500",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/687356/images/5399052_ce38f748-816c-4f1f-85e3-4a7ed0899e14_b32a2b60-52de-4776-aa12-25aa203a3e70/thumbs/inside/1600x1200/jpg/curl_phone-stand_black_perspective.webp",
      },
      {
        id: "244",
        name: "Reindeer",
        description: `single color`,
        price: "1300",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/681402/images/5354680_127e0b54-d559-4e11-b4e6-d7dedfe16c6a_699c60d4-ce63-42af-9be5-62a47a2ccde1/thumbs/inside/1600x1200/jpg/20231215_072417.webp",
      },
      {
        id: "14",
        name: "LANTERN │ Bedside/Desk Lamp",
        description: `Lantern styled bedside/table lamp. Statement piece that will enhance every space and starts a conversations.`,
        price: "800",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/716596/images/5618143_c70eff63-a94c-4d16-8bfe-6c8209673646_3774717a-9a55-450b-923b-97d21b7008b3/ezgifcom-animated-gif-maker.gif",
      },
      {
        id: "90",
        name: "Parametric Voron Pot and Planter - Vase mode",
        description: `A simple parametric design pot for your plants - Voronoi pattern`,
        price: "1800",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/646790/images/5104847_c3338b4e-0af9-450c-8887-df177194485b_e05a8101-f715-4cb8-8012-d88187af6921/thumbs/inside/1600x1200/jpg/img_20231104_213322.webp",
      },
      {
        id: "44",
        name: "LEAK - watering can",
        description: `Mini watering can for small green worlds`,
        price: "399",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/714999/images/5606759_6e4410f8-cba6-426a-a842-e194809c0a81_0f0651ca-91cf-4f1b-b88a-06637fefb0c6/thumbs/inside/1600x1200/jpg/paolo-gerosa-leak-1.webp",
      },
      {
        id: "49",
        name: "CARTOON ROCKET - NO PAINTING REQUIRED",
        description: `The rocket is 15cm tall by itself and 22cm tall with the base`,
        price: "1900",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/718574/images/5632039_a65d3992-50a2-4bae-8dc1-e2a7bcf1b09c_486f3570-efa6-465b-872d-1bf969c10b5e/thumbs/inside/1600x1200/jpg/1.webp",
      },
      {
        id: "821",
        name: "Small 8 Day Clock",
        description: `The clock is 6.65" wide by 10.75" tall and 5.4" deep (170mm x 275mm x 140mm). The tip of the pendulum is 24" long (610mm).`,
        price: "1300",
        image_title: "slicker-jacket_lynda_29941",
        image:
          "https://media.printables.com/media/prints/681259/images/5353707_ff7cf6f9-d755-490c-a89e-cc65061c8d26_396739f9-0e88-4094-9e40-953af902c1b7/thumbs/inside/1600x1200/jpg/dsc06230b.webp",
      },
    ];
    this.products = data;
  },
};
</script>
<style>
@media only screen and (min-width: 769px) {
  .desktop-only {
    display: none;
  }
}

.cat {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.desktop-only {
  display: block;
}

@media only screen and (max-width: 768px) {
  .mobile-only {
    display: none;
  }

  .hmb {
    display: none;
  }

  .hmd {
    display: block;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .cat {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
  }
}
</style>