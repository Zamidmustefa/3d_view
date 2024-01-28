<template>
  <div>
    <button @click="$router.go(-1)" class="btn btn-default">&lt; Back</button>
    <h1>Upload your 3D model</h1>
    <iframe  src="https://3dviewer.net/" style="width: 70vw; height: 100vh; border: 1px solid rgba(0, 0, 0, 0.232);"></iframe>
  </div>
</template>

<script>

export default {
  name: "Upload3d",

  data() {
    return {
      product: null,
    };
  },
};
</script>
