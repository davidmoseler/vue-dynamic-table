<template>
  <paginator
    :initialPage = 1
    pageCount = 20
    initialPageSize = 10
    pageSizeText = 'Items per page'
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
