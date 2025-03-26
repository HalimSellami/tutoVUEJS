<template>
    <div
        class="food-icon"
        :title="tooltip"
        :style="{backgroundImage: `url('${image}')`}">
        <FavoriteWidget
            class="fav-widget"
            :initial_value="is_fav"
            v-on:toggle="toggle($event)"
        />
        <div class="food-name">
            <p>{{name}}</p>
        </div>
    </div>
</template>

<script>

import FavoriteWidget from './FavoriteWidget.vue';

export default {
  name: 'FoodIcon',
  created() {
    this.logTelemetryEvent('Component_Loaded', this.$options.name);
  },
  props: {
    name: {
      default: 'Food name',
      type: String,
      validator(n) { return n.length > 2; },
    },
    image: {
      type: String,
      default: '../assets/défaultPI.jpg',
    },
    is_fav: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    group: {
      type: String,
      validator(group) { return ['Fruits', 'Proteine', 'Légume', 'autres'].indexOf(group) !== -1; },
    },
  },
  components: {
    FavoriteWidget,
  },
  methods: {
    toggle(value) {
      console.log(value);
    },
    logTelemetryEvent(type, value) {
      console.log(`Sanding télémétry event to server ${type}:${value}`);
    },
  },
  computed: {
    tooltip() {
      return `${this.name} - ${this.description || 'pas de description disponible'}`;
    },
  },
};
</script>

<style scoped>
    .food-icon{
        display: flex;
        align-items: flex-end;
        width: 200px;
        height: 200px;
        border: 1px solid grey;
        background-image: url('../assets/défaultPI.jpg');
    }

    .food-name{
        color: white;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }
</style>
