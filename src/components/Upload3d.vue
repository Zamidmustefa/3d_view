<template>
  <div>
    <img
      src="../../public/logo.png"
      width="240px"
      style="margin-bottom: 20px"
      alt=""
    />
    <br />
    <button @click="$router.go(-1)" class="btn btn-default">&lt; Back</button>
    <h1>Upload your 3D model (.gltf files only)</h1>
    <input type="file" @change="handleFileUpload" style="margin-bottom: 20px" />
    <model-gltf
      v-if="modelPath"
      :src="modelPath"
      :backgroundAlpha="0.5"
      backgroundColor="#4688B4"
      style="border-radius: 30px"
    />
    <div style="margin-top: 30px;" v-if="modelPath">
      <h5>Cash on delivery</h5>
      <div class="dsf">
        <input v-model="customer.name" type="text" placeholder="Name" />
        <input v-model="customer.phone_number" type="Number" placeholder="Phone Number" />
        <input v-model="customer.street_address" type="text" placeholder="Street Address" />
        <input v-model="customer.city" type="text" placeholder="City" />
        <input v-model="customer.province" type="text" placeholder="Province" />
        <input v-model="customer.postal_code" type="text" placeholder="Postal code" />
      </div>
    <button
        class="btn btn-sm btn-outline-info text-dark mb-4 float-right"
        @click="addOrder"
      >
        {{ prom }}
      </button>
    </div>
    <div v-if="submitted" style="margin-top: 12px;">Model submitted successfully</div>
  </div>
</template>

<script>
import { ModelGltf } from "vue-3d-model";
import { app } from "../../firebase/boot"

export default {
  components: { ModelGltf },
  name: "Upload3d",

  data() {
    return {
      modelPath: null,
      prom: "Order Now!",
      fileP: null,
      submitted: false,
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

  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }
        );
      }
      // uploading the file
      this.fileP = uuidv4();
      if (file) {
        this.modelPath = URL.createObjectURL(file);
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(
          `${this.fileP}/${file.name}`
        );
        await fileRef.put(file);
        let fileURL = await fileRef.getDownloadURL();
      }
    },

    addOrder() {
      this.prom = "...Adding"
      app.firestore().collection("orders").add({
        customer: this.customer,
        link: this.fileP
      }).then(() => {
        this.submitted = true
        setTimeout(() => {
          window.location.href = '/';
        }, 800);
      }).catch(() => {
        this.prom = "Error"
      })
    }
  },
};
</script>
