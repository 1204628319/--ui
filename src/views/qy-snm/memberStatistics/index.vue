<template>
  <div>
    <div class="rowSection">
      <div class="rowSection-content">
        <div class="rowSection-content-right">
          <eHeader :query="query" :sup-this="supThis" />
          <el-table
            v-loading="loading"
            v-el-height-adaptive-table="{bottomOffset: 55}"
            :data="data"
            height="this.$constant.STYLES.TABLE_HEIGHT"
            stripe
            border
            size="mini"
          >
            <el-table-column label="序号" width="50" type="index" />
            <el-table-column label="进件人身份证号码" prop="certId" min-width="100" :show-overflow-tooltip="true" />
            <el-table-column label="未支付金额(元)" prop="notPayFee" min-width="70" :show-overflow-tooltip="true" />
            <el-table-column label="处理中金额(元)" prop="payingFee" min-width="70" :show-overflow-tooltip="true" />
            <el-table-column label="已支付金额(元)" prop="payedFee" min-width="70" :show-overflow-tooltip="true" />
            <el-table-column label="失败金额(元)" prop="failFee" min-width="70" :show-overflow-tooltip="true" />
            <el-table-column label="异常金额(元)" prop="abnormalFee" min-width="70" :show-overflow-tooltip="true" />
            <el-table-column label="总金额(元)" prop="totalFee" min-width="70" :show-overflow-tooltip="true" />
          </el-table>
          <!--分页组件-->
          <el-pagination
            :total="total"
            class="el-cus-pagination"
            layout="total, sizes, prev, pager, next, jumper"
            small
            @size-change="sizeChange"
            @current-change="pageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initData from '@/mixins/initData'
import eHeader from './module/header'

export default {
  components: { eHeader },
  mixins: [initData],
  data() {
    return {
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
      this.url = '/alipayCreditPay/memberStatistics'
      this.params = { page: this.page, size: this.size }
      this.params['certId'] = this.query.certId || ''
      return true
    },
    searchByCertId(certId) {
      this.page = 1
      this.$set(this.query, 'certId', certId)
      this.init()
    }
  }
}
</script>
