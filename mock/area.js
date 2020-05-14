const areaGetTreeData = {
  "result": "success",
  "msg": "成功",
  "errorCode": "2333",
  "data": [{
      "id": "1",
      "isDel": false,
      "sort": 1,
      "areaName": "根地区",
      "pid": 0,
      "children": [{
        "areaName": "开福区",
        "areaCode": "11",
        "id": "11",
        "isDel": false,
        "pid": "1",
        "sort": 1
      }, {
        "areaName": "岳麓区",
        "id": "12",
        "isDel": false,
        "pid": "1",
        "sort": 1,
        "children": [{
          "areaName": "高新片区",
          "id": "121",
          "isDel": false,
          "pid": "12",
          "sort": 1
        }, {
          "areaName": "梅溪湖片区",
          "id": "122",
          "isDel": false,
          "pid": "12",
          "sort": 1
        }]
      }]
    },
    {
      "id": 2,
      "pid": 0,
      "isDel": false,
      "sort": 2,
      "areaName": "岳阳",
      "children": [{
        "areaName": "岳阳楼区",
        "id": 21,
        "isDel": false,
        "pid": 2,
        "sort": 1
      }]
    },
    {
      "id": 3,
      "pid": 0,
      "isDel": false,
      "sort": 2,
      "areaName": "浏阳",
      "children": [{
        "areaName": "浏阳楼区",
        "id": 31,
        "isDel": false,
        "pid": 3,
        "sort": 1
      }]
    },
    {
      "id": 4,
      "isDel": false,
      "sort": 2,
      "areaName": "郴州",
      "children": [{
        "areaName": "郴州楼区",
        "id": 41,
        "isDel": false,
        "pid": 4,
        "sort": 1
      }]
    }
  ]
}

const areaGetFullTreeData = {
  "result": "success",
  "msg": "成功",
  "errorCode": "2333",
  "data": [{
    "areaName": "长沙市",
    "id": "1",
    "isDel": false,
    "pid": "1",
    "sort": 1,
    "children": [
      {
        "areaName": "开福区",
        "areaCode": "11",
        "id": "11",
        "isDel": false,
        "pid": "1",
        "sort": 1
      },
      {
        "areaName": "岳麓区",
        "id": "12",
        "isDel": false,
        "pid": "1",
        "sort": 1,
        "children": [{
          "areaName": "高新片区",
          "id": "121",
          "isDel": false,
          "pid": "12",
          "sort": 1
        }, {
          "areaName": "梅溪湖片区",
          "id": "122",
          "isDel": false,
          "pid": "12",
          "sort": 1
        }]
      }
    ]},
    {
      "id": 2,
      "pid": 0,
      "isDel": false,
      "sort": 2,
      "areaName": "岳阳",
      "children": [{
        "areaName": "岳阳楼区",
        "id": 21,
        "isDel": false,
        "pid": 2,
        "sort": 1
      }]
    },
    {
      "id": 3,
      "pid": 0,
      "isDel": false,
      "sort": 2,
      "areaName": "浏阳",
      "children": [{
        "areaName": "浏阳楼区",
        "id": 31,
        "isDel": false,
        "pid": 3,
        "sort": 1
      }]
    },
    {
      "id": 4,
      "isDel": false,
      "sort": 2,
      "areaName": "郴州",
      "children": [{
        "areaName": "郴州楼区",
        "id": 41,
        "isDel": false,
        "pid": 4,
        "sort": 1
      }]
    }]
}

const areaAddData = {
  "result": "success",
  "msg": "成功",
  "errorCode": "2333",
  "data": {}
}

const areaEditData = {
  "result": "success",
  "msg": "成功",
  "errorCode": "2333",
  "data": {}
}

const areaDeleteData = {
  "result": "success",
  "msg": "成功",
  "errorCode": "2333",
  "data": {}
}

export default [{
    url: '/jhgx/area/selectTreeExceptSelf',
    type: 'post',
    response: config => {
      return areaGetTreeData
    }
  },
  {
    url: '/jhgx/area/selectFullTree',
    type: 'post',
    response: config => {
      return areaGetFullTreeData
    }
  },
  {
    url: '/jhgx/area/add',
    type: 'post',
    response: config => {
      return areaAddData
    }
  },
  {
    url: '/jhgx/area/edit',
    type: 'post',
    response: config => {
      return areaEditData
    }
  },
  {
    url: '/jhgx/area/delete',
    type: 'post',
    response: config => {
      return areaDeleteData
    }
  }
]
