<template>
  <div class="margin_bottom10 Server-header">
    <div class="filter-container">
      <div class="filter-title">
        <span>商户交易金额统计列表</span>
      </div>
      <div class="filter-item">
        <el-input v-model="query.certId" clearable size="small" placeholder="请输入身份证号码">
          <i slot="suffix" class="el-input__icon" />
        </el-input>
        <el-button type="primary" size="small" @click="searchByCertId">
          查询
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: Object,
      required: true
    },
    supThis: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      isBtnDisable: true
    }
  },
  methods: {
    searchByCertId() {
      this.supThis.searchByCertId(this.query.certId)
    }
  }
}
</script>
