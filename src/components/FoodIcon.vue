<template>
    <div
        class="food-icon"
        :title="tooltip"
        :style="generateFoodIconStyle"
        :class="generateFoodIconClasses">
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
    generateFoodIconStyle() {
      return {
        backgroundImage: `url('${this.image}')`,
      };
    },
    generateFoodIconClasses() {
      const classes = {};
      classes['food-group'] = true;
      classes[`food-group-${this.group}`] = true;

      return classes;
    },
  },
};
</script>

<style scoped>

    /* $food-group-highlight-border: 5px solid black; */

    .food-icon{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        height: 200px;
        border: 1px solid grey;
        background-image: url('../assets/défaultPI.jpg');
        margin: 0px 10px;
    }

    .food-name{
        color: white;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }

    .food-group {
        box-shadow: 5px 5px #aaa;
    }

    .food-group-Fruits {
        border-left: 5px solid green;
    }

    .food-group-Proteine {
        border-left: 5px solid green;
    }

    .food-group-Legume {
        border-left: 5px solid blue;
    }
</style>
