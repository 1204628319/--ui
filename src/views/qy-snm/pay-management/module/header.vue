<template>
  <div class="margin_bottom10 Server-header">
    <div class="filter-container">
      <div class="filter-title">
        <span>订单列表</span>
      </div>
      <div class="filter-item">
        <el-input v-model="query.authCode" clearable size="small" placeholder="请输入付款码">
          <i slot="suffix" class="el-input__icon" />
        </el-input>
        <el-button type="primary" size="small" @click="searchByAuthCode">
          查询
        </el-button>
      </div>
      <div class="filter-button">
        <el-button type="warning" round icon="el-icon-plus" @click="pay">
          发起支付
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from '@/api/payOrder'
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
    searchByAuthCode() {
      if (this.query.authCode) {
        this.supThis.searchByAuthCode(this.query.authCode)
      } else {
        this.$notify({
          title: '请输入付款码',
          type: 'warning',
          duration: 3500
        })
      }
    },
    pay() {
      this.supThis.pay()
    },
    sync() {
      this.loading = true
      sync(this.multipleSelection).then(res => {
        this.loading = false
        this.$notify({
          title: res.msg,
          type: 'success',
          duration: 3500
        })
        this.supThis.refreshTable()
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
