<template>
  <div>
    <div class="center mt-3 row hide-on-med-and-down valign-wrapper" style="justify-content: center;">
      <label class="hide-on-med-and-down">
        {{pageSizeText}}
      </label>
      <div class="col-lg-2">
        <label class="hide-on-large-only">
          {{pageSizeText}}
        </label>
        <select ref='pageSizeSelect' v-model="pageSize">
          <option
            v-for="value in values"
            :key=value value="value">
            {{value}}
          </option>
        </select>
      </div>
      <div>
        <ul class="pagination paginator mt-3 my-lg-auto">
          <li :class="previous===0 ? 'disabled' :''">
            <a @click="decreasePage">
              <i class="material-icons">chevron_left</i>
            </a>
          </li>
          <li
            v-for="pageNumber in pages"
            :key="pageNumber"
            :class="pageNumber == parseInt(currentPage,10) ? 'active amber darken-2' : ''">
            <a @click="currentPage = pageNumber">{{pageNumber}}</a>
          </li>
          <li :class="parseInt(currentPage,10) == parseInt(pageCount,10) ? 'disabled' :''">
            <a @click="increasePage">
              <i class="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import M from 'materialize-css'
  import 'materialize-css/dist/css/materialize.css'
  import 'material-design-icons/iconfont/material-icons.css'

  export default {
    props: [
      'initialPage',
      'pageCount',
      'initialPageSize',
      'pageSizeText'
    ],
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
      let options = {
        'classes': 'page-size-select'
      }
      let select = M.FormSelect.init(this.$refs.pageSizeSelect, options)
      select.input.classList.add('select-input')
    },
    methods: {
      decreasePage: function(){
        if(this.currentPage > 1){
          this.currentPage--
        }
      },
      increasePage: function(){
        if(this.currentPage < this.pageCount){
          this.currentPage++
        }
      }
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
        return Array.from(
          new Array(
            this.upperBoundary - this.lowerBoundary + 1
          ),
          (x,i) => i + this.lowerBoundary
        )
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
  .page-size-select {
    width: 40px
  }
  .select-input {
    position: relative;
    right: 20px;
    padding-left: 17px !important
  }
  label {
    padding-right: 15px
  }
</style>
