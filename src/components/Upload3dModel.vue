<template>
  <model-gltf src="test.gltf" backgroundAlpha="0.5"
      backgroundColor="#ff0" style="border-radius: 30px;" />
</template>
<script>
import { ModelGltf } from 'vue-3d-model';

export default {
  components: { ModelGltf }
}
</script>