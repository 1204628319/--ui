const defaultData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {
    "items": []
  }
}

const dbTypeData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {
    "dictCode": "DATABASE_TYPE",
    "dictName": "数据库类型",
    "id": 1,
    "note": "note",
    "isDel": false,
    "items": [{
      "dictId": 1,
      "id": 1,
      "note": "note",
      "isDel": false,
      "itemCode": "mysql",
      "itemName": "mysql",
      "sort": 1
    }, {
      "dictId": 1,
      "id": 2,
      "note": "note",
      "isDel": false,
      "itemCode": "oracle",
      "itemName": "oracle",
      "sort": 2
    }]
  }
}

export default [
  {
    url: '/jhgx/dict/getDict',
    type: 'post',
    response: config => {
      const { dictCode } = config.body
      console.log(dictCode)
      if (dictCode === 'DATABASE_TYPE') {
        return dbTypeData
      }

      return defaultData
    }
  }
]
