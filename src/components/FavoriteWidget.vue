<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="fav-icon" @click="toggle()">
        <span v-show="is_fav">
            <i class="fas fa-star"></i>
        </span>
        <span v-show="!is_fav">
            <i class="far fa-star"></i>
        </span>
    </div>
</template>

<script>
export default {
  name: 'FavoriteWidget',
  emits: ['toggle'],
  data() {
    return {
      is_fav: this.initial_value || false,
    };
  },
  props: {
    initial_value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.is_fav = !this.is_fav;
      this.$emit('toggle', this.is_fav);
    },
  },
};
</script>

<style scoped>

</style>
