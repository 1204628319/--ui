<template>
  <div>
    <eForm ref="form" :form-type="formType" :sup-this="supThis" />
    <div class="rowSection">
      <div class="rowSection-content">
        <div class="rowSection-content-right">
          <eHeader :query="query" :sup-this="supThis" />
          <el-table v-loading="loading" v-el-height-adaptive-table="{bottomOffset: 55}" :data="data" height="this.$constant.STYLES.TABLE_HEIGHT" stripe border size="mini">
            <el-table-column label="序号" width="50" type="index" />
            <el-table-column label="付款码" prop="authCode" min-width="80" :show-overflow-tooltip="true" />
            <el-table-column label="订单号" prop="merOrderId" min-width="120" :show-overflow-tooltip="true" />
            <el-table-column label="金额(元)" prop="orderAmtByYuan" min-width="60" :show-overflow-tooltip="true" />
            <el-table-column label="支付状态" prop="payStatusName" min-width="80" :show-overflow-tooltip="true" />
            <el-table-column label="时间" prop="transTime" min-width="80" :show-overflow-tooltip="true" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initData from '@/mixins/initData'
import eHeader from './module/header'
import eForm from './module/form'

export default {
  components: { eHeader, eForm },
  mixins: [initData],
  data() {
    return {
      formType: '',
      delLoading: false,
      supThis: this
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    beforeInit() {
      this.url = '/alipayCreditPay/selectPayResult'
      this.params['authCode'] = this.query.authCode || ''
      return true
    },
    showQueryAndEditForm(data) {
      const _this = this.$refs.form
      _this.resetForm()
      _this.form = {
        authCode: data.authCode || '',
        orderAmtByYuan: data.orderAmtByYuan || ''
      }
      _this.dialog = true
    },
    pay() {
      this.formType = this.$constant.TABLE_FORM_TYPE.ADD
      const _this = this.$refs.form
      _this.resetForm()
      _this.dialog = true
    },
    searchByAuthCode(authCode) {
      this.$set(this.query, 'authCode', authCode)
      this.init()
    }
  }
}
</script>
