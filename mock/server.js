const serverSelectPageData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {
    "currPage": 1,
    "data": [{
      "contact": "马达大",
      "contactPhone": "14565443334",
      "cpuCoreNumber": 2,
      "hardDiskCapacit": 300,
      "id": "1",
      "internalStorageCapacity": 40,
      "isDel": false,
      "loginName": "admin",
      "loginPassword": "123456",
      "note": "端口1111",
      "operatingSystem": "win7",
      "serverHost": "127.0.0.1",
      "serverName": "服务器1"
    },{
      "contact": "马达大",
      "contactPhone": "14565443334",
      "cpuCoreNumber": 2,
      "hardDiskCapacit": 300,
      "id": "2",
      "internalStorageCapacity": 40,
      "isDel": false,
      "loginName": "admin",
      "loginPassword": "123456",
      "note": "端口1111",
      "operatingSystem": "win7",
      "serverHost": "127.0.0.1",
      "serverName": "服务器2"
    },{
      "contact": "马达大aaa",
      "contactPhone": "14565443334",
      "cpuCoreNumber": 2,
      "hardDiskCapacit": 300,
      "id": "3",
      "internalStorageCapacity": 40,
      "isDel": false,
      "loginName": "admin",
      "loginPassword": "123456",
      "note": "端口1111",
      "operatingSystem": "win7",
      "serverHost": "127.0.0.1",
      "serverName": "服务器3"
    },{
      "contact": "马达大aaa",
      "contactPhone": "14565443334",
      "cpuCoreNumber": 2,
      "hardDiskCapacit": 300,
      "id": "4",
      "internalStorageCapacity": 40,
      "isDel": false,
      "loginName": "admin",
      "loginPassword": "123456",
      "note": "端口1111",
      "operatingSystem": "win7",
      "serverHost": "127.0.0.1",
      "serverName": "服务器4"
    }],
    "pageSize": 10,
    "totalCount": 340,
    "totalPage": 40
	}
}

const serverSelectListData = {
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
		"serverAddr": "127.0.0.1",
		"serverName": "服务器1"
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
		"serverAddr": "127.0.0.1",
		"serverName": "服务器2"
	}]
}

const serverAddData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

const serverEditData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

const serverDeleteData = {
	"result": "success",
	"msg": "成功",
	"errorCode": "2333",
	"data": {}
}

export default [
  {
    url: '/jhgx/server/selectList',
    type: 'post',
    response: config => {
      return serverSelectListData
    }
  },
  {
    url: '/jhgx/server/selectPage',
    type: 'post',
    response: config => {
      return serverSelectPageData
    }
  },
  {
    url: '/jhgx/server/add',
    type: 'post',
    response: config => {
      return serverAddData
    }
  },
  {
    url: '/jhgx/server/edit',
    type: 'post',
    response: config => {
      return serverEditData
    }
  },
  {
    url: '/jhgx/server/deleteBatch',
    type: 'post',
    response: config => {
      return serverDeleteData
    }
  }
]
