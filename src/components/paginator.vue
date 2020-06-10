<template>
  <div id="paginator" class="valign-wrapper">
    <label class="hide-on-med-and-down">
      {{ pageSizeText }}
    </label>
    <div class="col-lg-2">
      <label class="hide-on-large-only">
        {{ pageSizeText }}
      </label>
      <select ref="pageSizeSelect" v-model="pageSize" class="browser-default">
        <option
          v-for="value in values"
          :key="value"
          :selected="value == initialPageSize"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
    </div>
    <div>
      <ul class="pagination paginator mt-3 my-lg-auto">
        <li :class="{ disabled: currentPage == 1 }">
          <a @click="decreasePage">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        <li
          v-for="pageNumber in pages"
          :key="pageNumber"
          :class="{ 'active light-green darken-2': pageNumber == currentPage }"
        >
          <a @click="currentPage = pageNumber">{{ pageNumber }}</a>
        </li>
        <li :class="{ disabled: currentPage == pageCount }">
          <a @click="increasePage">
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  props: ['initialPage', 'pageCount', 'initialPageSize', 'pageSizeText'],
  data() {
    return {
      currentPage: this.initialPage,
      pageSize: this.initialPageSize,
      values: [10, 20, 50, 100]
    };
  },
  computed: {
    lowerBoundary() {
      return Math.max(1, Math.min(this.currentPage - 3, this.pageCount - 6));
    },
    upperBoundary() {
      return Math.min(this.pageCount, Math.max(this.currentPage + 3, 7));
    },
    pages() {
      return Array.from(
        new Array(this.upperBoundary - this.lowerBoundary + 1),
        (x, i) => i + this.lowerBoundary
      );
    }
  },
  mounted() {
    const options = {
      classes: 'page-size-select'
    };
    M.FormSelect.init(this.$refs.pageSizeSelect, options);
  },
  methods: {
    decreasePage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    increasePage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    }
  }
};
</script>

<style scoped>
#paginator {
  justify-content: center;
}
.pagination li {
  width: 40px;
}
.paginator {
  display: flex;
  align-items: center;
  justify-content: center;
}
label {
  padding-right: 15px;
}
a {
  cursor: pointer;
}
</style>
