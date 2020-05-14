const dbSelectPageData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {
    "currPage": 1,
    "data": [{
      "nodeId": 12,
      "databaseHost": "127.0.0.1",
      "databaseInstance": "testDB",
      "databaseName": "数据库1",
      "databasePassword": "pwd",
      "databasePort": "3306",
      "databaseType": "mysql",
      "databaseTypeName": "mysqlName",
      "databaseUsername": "user",
      "isDel": false,
      "nodeName": "节点名称",
      "note": "notenote",
      "id": "1"
    },{
      "nodeId": 12,
      "databaseHost": "127.0.0.1",
      "databaseInstance": "testDB",
      "databaseName": "数据库2",
      "databasePassword": "pwd",
      "databasePort": "3306",
      "databaseType": "mysql",
      "databaseTypeName": "mysqlName",
      "databaseUsername": "user",
      "isDel": false,
      "nodeName": "节点名称",
      "note": "notenote",
      "id": "2"
    },{
      "nodeId": 12,
      "databaseHost": "127.0.0.1",
      "databaseInstance": "testDB",
      "databaseName": "数据库3",
      "databasePassword": "pwd",
      "databasePort": "3306",
      "databaseType": "mysql",
      "databaseTypeName": "mysqlName",
      "databaseUsername": "user",
      "isDel": false,
      "nodeName": "节点名称",
      "note": "notenote",
      "id": "3"
    },{
      "nodeId": 12,
      "databaseHost": "127.0.0.1",
      "databaseInstance": "testDB",
      "databaseName": "数据库4",
      "databasePassword": "pwd",
      "databasePort": "3306",
      "databaseType": "mysql",
      "databaseTypeName": "mysqlName",
      "databaseUsername": "user",
      "isDel": false,
      "nodeName": "节点名称",
      "note": "notenote",
      "id": "4"
    }],
    "pageSize": 10,
    "totalCount": 340,
    "totalPage": 40
	}
}

const dbSelectListData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": [{
		"contact": "马达大",
		"contactPhone": "14565443334",
		"cpuCoreNumber": 2,
		"hardDiskCapacit": 300,
		"id": 1,
		"internalStorageCapacity": 40,
		"isDel": false,
		"loginName": "admin",
		"loginPassword": "123456",
		"note": "端口1111",
		"operatingSystem": "win7",
		"dbAddr": "127.0.0.1",
		"dbName": "服务器1"
	},{
		"contact": "马达大",
		"contactPhone": "14565443334",
		"cpuCoreNumber": 2,
		"hardDiskCapacit": 300,
		"id": 2,
		"internalStorageCapacity": 40,
		"isDel": false,
		"loginName": "admin",
		"loginPassword": "123456",
		"note": "端口1111",
		"operatingSystem": "win7",
		"dbAddr": "127.0.0.1",
		"dbName": "服务器2"
	}]
}

const dbAddData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

const dbEditData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

const dbDeleteData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

export default [
  {
    url: '/jhgx/database/getList',
    type: 'post',
    response: config => {
      return dbSelectListData
    }
  },
  {
    url: '/jhgx/database/selectPage',
    type: 'post',
    response: config => {
      return dbSelectPageData
    }
  },
  {
    url: '/jhgx/database/add',
    type: 'post',
    response: config => {
      return dbAddData
    }
  },
  {
    url: '/jhgx/database/edit',
    type: 'post',
    response: config => {
      return dbEditData
    }
  },
  {
    url: '/jhgx/database/deleteBatch',
    type: 'post',
    response: config => {
      return dbDeleteData
    }
  }
]
