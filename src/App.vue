<template>
  <paginator
    :initial-page="1"
    page-count="20"
    initial-page-size="10"
    page-size-text="Items per page"
  />
</template>

<script>
import paginator from './components/paginator.vue';
import 'materialize-css/dist/css/materialize.css';
import 'material-design-icons/iconfont/material-icons.css';

export default {
  components: {
    paginator,
  },
};
</script>
