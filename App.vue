<template>
  <paginator
    initialPage = 1
    pageCount = 5
    initialPageSize = 10
  />
</template>

<script>
  import 'materialize-css'
  import 'materialize-css/dist/css/materialize.css'
  import 'material-design-icons/iconfont/material-icons.css'
  import paginator from './src/components/paginator'

  export default {
    components: {
      paginator
    }
  }
</script>
