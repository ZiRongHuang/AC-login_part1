const accountData = require('./public/apis/accountData.json')

function checkEmailAndPassword(account) {
  const { email, password } = account
  const found = accountData.find(
    ac => ac.email === email && ac.password === password
  )
  return found || null
}

function checkAccount(account) {
  // 確認是否有該組帳號密碼
  const check = checkEmailAndPassword(account)

  // 如有回傳 firstName
  if (check) return check.firstName

  return null
}

module.exports = checkAccount
