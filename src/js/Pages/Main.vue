<template>
    <h1>Test</h1>
</template>

<script lang="ts">
  export default {
    components: {
    },
    props: {
    },
    data() {
      return {
        canvasContext: null
      };
    },
    watch: {
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        test(): number {
            return 666;
        }
    }
  };
</script>

<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>
