// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  env: "release-a38306"
})

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('test_user').where({
      _openid:"oGJMY0SruoCfybSpUC-G6WN-Ju8E"
    })
      .update({
        data: {
          phone:"000000"
        },
      })
  }catch(e){
    console.log(e)
  }
}