import paginator from '../src/components/paginator';

export default {
  title: 'Paginator'
};

export const five_pages = () => ({
  components: { paginator },
  template: `
  <paginator
    initialPage = 1
    pageCount = 5
    initialPageSize = 10
  />
`
})
