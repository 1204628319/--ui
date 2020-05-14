<template>
  <el-dialog :append-to-body="true" :before-close="handleCommonCloseDialog" :visible.sync="dialog"  title= "上传证件照片" width="350px" class="cus-dialog">
    <el-form ref="form" width="300px" v-closeDialog size="small" :model="form" :rules="rules" label-width="100px" style="margin-top: 20px">
      <div class="form-import">
        <el-form-item label="身份证号码" prop="certId">
          <el-input v-model="form.certId" placeholder="请输入身份证号码" class="commonWidth" />
        </el-form-item>
        <el-form-item label="照片类别" prop="imageDefinition" >
          <el-select v-model="form.imageDefinition" clearable placeholder="请选择照片类别" class="commonWidth" size="10">
            <el-option v-for="item in imageDefinitionOptions" :key="item.code" :label="item.name" :value="item.code" />
          </el-select>
        </el-form-item>
        <el-form-item label="附件" prop="attach">
          <el-upload
            ref="upload"
            v-model="form.attach"
            action=""
            :limit="1"
            :on-change="changeFile"
            :on-remove="removeFile"
            :auto-upload="false"
            :http-request="uploadFile"
            accept="image/png, image/jpeg"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg和png文件，且大小不超过2M</div>
          </el-upload>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" class="cancel" @click="cancel">取消</el-button>
      <el-button size="small" :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { handleCommonCloseDialog } from '@/utils/dialogCustom'
import { uploadImage } from '@/api/payOrder'

export default {
  components: {
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.querySelector('input').focus()
      }
    }
  },
  props: {
    formType: {
      type: String,
      required: true
    },
    supThis: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      dialog: false,
      form: {
        certId: '',
        imageDefinition: '',
        attach: []
      },
      rules: {
        certId: [
          { required: true, message: '请输入身份证号码', trigger: 'change' },
          { min: 0, max: 18, message: '长度在18个字符以内', trigger: 'blur' }
        ],
        imageDefinition: [
          { required: true, message: '请选择类别', trigger: 'change' }
        ]
      },
      imageDefinitionOptions: [
        { key: 1, code: '1', name: '身份证正面' },
        { key: 2, code: '2', name: '身份证反面' },
        { key: 3, code: '3', name: '结算卡正面' },
        { key: 4, code: '4', name: '手持结算卡身份证' }
      ]
    }
  },

  methods: {
    handleCommonCloseDialog,
    cancel() {
      this.resetForm()
    },
    resetForm() {
      this.dialog = false

      this.form = {
        certId: '',
        imageDefinition: '',
        attach: []
      }

      this.$refs['form'] && this.$refs['form'].resetFields()
      this.$refs['upload'] && this.$refs['upload'].clearFiles()
    },
    doSubmit() {
      this.$refs['form'].validate(async(valid) => {
        if (!valid) {
          return
        }
        this.$confirm('确定要上传吗？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(() => {
          this.loading = true
          this.uploadImage()
        }).catch((e) => {
          this.loading = false
          console.info(e)
        })
      })
    },
    uploadImage() {
      uploadImage(this.buildUploadForm()).then(res => {
        this.loading = false
        this.dialog = false
        this.$notify({
          title: res.msg,
          type: 'success',
          duration: 2500
        })
        this.$parent.init()
      }).catch(() => {
        this.loading = false
      })
    },
    /**
     * 重写覆盖组件上传文件方法，使组件自带的上传失效
     */
    uploadFile(file) {

    },
    removeFile(file, fileList) {
      this.form.attach = fileList
      this.$refs['form'].validateField('attach')
    },
    handleExceed(file, fileList) {
      // 上传超过数量限制
      this.$message.error('只能上传一个图片')
    },
    // beforeUpload(file) {
    //   const isLtsize = file.size / 1024 / 1024 < 2
    //   if (!isLtsize) {
    //     this.$message.error('图片大小不能超过 2MB')
    //   }
    //   return isLtsize
    // },
    changeFile(file, fileList) {
      // 效验文件类型
      const splitIndex = file.name.lastIndexOf('.')
      //const suffixName = splitIndex > -1 ? file.name.substring(splitIndex + 1, file.name.length) : ''
      // 效验文件大小
      const isOverMaxSize = file.size > 2 * 1024 * 1024
      if (isOverMaxSize) {
        const errorMsg = '上传账单文件大小不能超过2MB!'
        this.$message.error(errorMsg)
        fileList.pop(file)
      }
      this.form.attach = fileList
      this.$refs['form'].validateField('attach')
    },
    buildUploadForm() {
      const uploadForm = new FormData()
      const requestBody = {
        certId: this.form.certId,
        imageDefinition: this.form.imageDefinition
      }
      uploadForm.append('data', JSON.stringify(requestBody))
      for (let i = 0; i < this.form.attach.length; i++) {
        uploadForm.append('file', this.form.attach[i].raw)
      }
      return uploadForm
    }
  }
}
</script>
<style>
  .el-scrollbar__view {
    height: 100px;
  }
</style>
