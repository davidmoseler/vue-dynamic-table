<template>
  <paginator
    initialPage = 1
    pageCount = 5
    initialPageSize = 10
  />
</template>

<script>
  import paginator from './src/components/paginator'

  export default {
    components: {
      paginator
    }
  }
</script>
