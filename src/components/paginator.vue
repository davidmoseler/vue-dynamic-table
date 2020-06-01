<template>
  <div>
    <div class="center mt-3 row hide-on-med-and-down valign-wrapper" style="justify-content: center;">
      <label class="hide-on-med-and-down">itens por página</label>
      <div class="col-lg-2">
        <label class="hide-on-large-only">itens por página</label>
        <select ref='pageSizeSelect' v-model="pageSize" class="select2-container paginator-page-size" id="desk-page-size">
          <option v-for="value in values" :key=value value="value">{{value}}</option>
        </select>
      </div>
      <div>
        <ul class="pagination paginator mt-3 my-lg-auto" id="desk-paginator">
          <li :class="previous===0 ? 'disabled' :''">
            <a @click="currentPage>1? currentPage--:null" :data-page="previous===0 ? '' : previous"><i class="material-icons">chevron_left</i></a>
          </li>
          <li v-for="pageNumber in pages" :key="pageNumber" :class="pageNumber == parseInt(currentPage,10) ? 'active amber darken-2' : ''">
            <a @click="currentPage = pageNumber" :data-page="pageNumber">{{pageNumber}}</a>
          </li>
          <li :class="parseInt(currentPage,10) == parseInt(pageCount,10) ? 'disabled' :''">
           <a @click="currentPage++" :data-page="parseInt(currentPage,10) == parseInt(pageCount,10)? '' :nextpage"><i class="material-icons">chevron_right</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css'

  export default {
    props: ['initialPage', 'pageCount', 'initialPageSize'],
    data: function(){
      return {
        currentPage: this.initialPage,
        pageSize: this.initialPageSize,
        values: [
          10,
          20,
          50,
          100
        ]
      }
    },
    mounted: function(){
      M.FormSelect.init(this.$refs.pageSizeSelect);
    },
    computed: {
      previous: function(){
        return parseInt(this.currentPage,10)-1
      },
      nextpage: function(){
        return parseInt(this.currentPage,10)+1
      },
      lowerBoundary: function(){
        return Math.max(1, parseInt(this.currentPage,10)-5)
      },
      upperBoundary: function(){
        return Math.min(this.pageCount, parseInt(this.currentPage,10)+5);
      },
      pages: function(){
        return Array.from(new Array(this.upperBoundary - this.lowerBoundary + 1), (x,i) => i + this.lowerBoundary)
      }
    }
  }
</script>

<style>
  .pagination li a {
    padding: 0 15px;
  }
  .paginator {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-22 { font-size: 22px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }
  .material-icons.red-color {color: rgb(255, 0, 0) }
  .material-icons.blue-color {color:rgb(0, 174, 255) }
  .material-icons.red1 { color: rgba(251, 0, 0, 0.959); }
</style>
