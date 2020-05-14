<template>
  <div class="margin_bottom10 Server-header">
    <div class="filter-container">
      <div class="filter-title">
        <span>进件列表</span>
      </div>
      <div class="filter-item">
        <el-input v-model="query.certId" clearable size="small" placeholder="请输入身份证号码">
          <i slot="suffix" class="el-input__icon" />
        </el-input>
        <el-button type="primary" size="small" @click="searchByCertId">
          查询
        </el-button>
      </div>
      <div class="filter-button">
        <el-button type="warning" round icon="el-icon-plus" @click="scMember">
          发起商户注册
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
      if (this.query.certId) {
        this.supThis.searchByCertId(this.query.certId)
      } else {
        this.$notify({
          title: '请输入结算手机号',
          type: 'warning',
          duration: 3500
        })
      }
    },
    scMember() {
      this.supThis.scMember()
    }
  }
}
</script>
