<template>
  <paginator
    :initialPage = 1
    pageCount = 20
    initialPageSize = 10
    pageSizeText = 'Items per page'
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
