
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      return {"resultCode":"SUCCESS","errorCode":null,"resultMsg":null,"respTime":"2020-04-28 15:28:54","signType":null,"signText":null,"data":{"totalCount":66,"pageSize":10,"totalPage":7,"currPage":1,"data":[{"id":"1240814812817014785","createBy":"1232535762029842434","updateBy":"1229218909501050882","createAt":"2020-03-20 09:37:59","updateAt":"2020-04-01 14:40:33","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"301","terminalName":"","terminalAddr":"","isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1240814812817014786","createBy":"1232535762029842434","updateBy":"1232535762029842434","createAt":"2020-03-20 09:37:59","updateAt":"2020-03-20 09:37:59","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"302","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310785","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694618","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310787","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694620","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310788","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694621","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310789","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694622","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310790","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694623","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310791","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694624","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310792","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694625","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null},{"id":"1196611216584310793","createBy":"1","updateBy":"1","createAt":"2019-11-19 18:08:40","updateAt":"2019-11-19 18:08:40","orgCode":"10001","merchantCode":"1196609642801659906","isvCode":"1000134104300","terminalNo":"98694626","terminalName":null,"terminalAddr":null,"isDel":0,"extra":null,"tradeChannelName":"银行卡","isvTerminalJson":null,"orgName":"本院","merchantName":"银联-本院","isvName":"奔普刷卡(本)","orgCodes":null,"terminalTotal":0,"repeatTerminalNum":0,"isvCodeArr":null}]}}
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
