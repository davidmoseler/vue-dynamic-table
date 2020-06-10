import paginator from '../components/paginator.vue';

export default {
  title: 'Paginator'
};

export const fivePages = () => ({
  components: { paginator },
  template: `
  <paginator
    :initialPage = 1
    pageCount = 5
    initialPageSize = 10
    pageSizeText = "Items per page"
  />
`
});

export const twentyPages = () => ({
  components: { paginator },
  template: `
  <paginator
    :initialPage = 1
    pageCount = 20
    initialPageSize = 10
    pageSizeText = "Items per page"
  />
`
});
