<template>
  <div class="food-homepage-container">
    <FoodAppPageWrapper :title="title" :subtitle="description">
      <div class="food-items">
        <foodIcon
          class="food-icon" v-for="f in foods" :key="f.id"
          :name='f.name'
          :is_fav='f.is_fav'
          :image='f.image'
          :description='f.description'
          :group='f.groupe' />
      </div>
    </FoodAppPageWrapper>
  </div>
</template>

<script>
import FoodIcon from './FoodIcon.vue';
import FoodAppPageWrapper from './PageWrapper.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      title: 'The food App',
      description: "C'est cool de manger par ici",
      foods: [
        {
          // eslint-disable-next-line global-require
          id: 100, name: 'Pomme', description: 'rouge et croquante', image: require('@/assets/pomme.jpg'), is_fav: true, group: 'Fruits',
        },
        {
          // eslint-disable-next-line global-require
          id: 101, name: 'banane', description: undefined, image: require('@/assets/banane.jpg'), is_fav: true, group: 'Fruits',
        },
        {
          // eslint-disable-next-line global-require
          id: 102, name: 'oeuf', description: 'fragile', image: require('@/assets/oeuf.jpg'), is_fav: false, group: 'Proteine',
        },
        {
          // eslint-disable-next-line global-require
          id: 103, name: 'patate', description: 'Bien ronde et grosse', image: require('@/assets/patate.jpg'), is_fav: false, group: 'Légume',
        },
      ],

    };
  },
  components: {
    FoodIcon,
    FoodAppPageWrapper,
  },
};
</script>

<style scoped>

</style>
