<template>
  <div>
    <eForm ref="form" :form-type="formType" :sup-this="supThis" />
    <div class="rowSection">
      <div class="rowSection-content">
        <div class="rowSection-content-right">
          <eHeader :query="query" :sup-this="supThis" />
          <el-table v-loading="loading" v-el-height-adaptive-table="{bottomOffset: 55}" :data="data" height="this.$constant.STYLES.TABLE_HEIGHT" stripe border size="mini">
            <el-table-column label="序号" width="50" type="index" />
            <el-table-column label="身份证号码" prop="certId" min-width="80" :show-overflow-tooltip="true" />
            <el-table-column label="照片类别" prop="imageDefinitionName" min-width="120" :show-overflow-tooltip="true" />
            <el-table-column label="时间" prop="createTime" min-width="80" :show-overflow-tooltip="true" />
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
      this.url = '/alipayCreditPay/selectUploadImage'
      this.params['certId'] = this.query.certId || ''
      return true
    },
    uploadImage() {
      this.formType = this.$constant.TABLE_FORM_TYPE.ADD
      const _this = this.$refs.form
      _this.resetForm()
      _this.dialog = true
    },
    searchByCertId(authCode) {
      this.$set(this.query, 'certId', authCode)
      this.init()
    }
  }
}
</script>
