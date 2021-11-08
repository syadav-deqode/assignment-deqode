const fs = require('fs')
const path = require('path')

module.exports.testRoute = () => {
  const greet = { msg: "Hello, Test route working!" }
  return { greet }
}

module.exports.addUser = (body) => {
  let returnObj = { error: null, success: null, message: null }
  // Get the email from body
  const { email } = body
  // Get the file content
  const filePath = path.join(__base, '/users/' + 'users.json').toString()
  const users = fs.readFileSync(filePath, 'utf-8')
  // Will return null if not found
  const parsedUser = this.parseJson(users)
  if (!parsedUser) {
    // Add new user
    let obj = { users: [] };
    obj.users.push({ id: 1, email });
    const newUser = this.stringifyJson(obj)
    this.writeInFile(filePath, stringData)
    returnObj = { ...returnObj, success: true, message: "New user added" }
  } else {
    // Check file have some users or not
    const found_emails = parsedUser.users.filter(u => u.email === email);
    if (found_emails.length <= 0) {
      // Add new user object
      const u = { id: parsedUser.users.length + 1, email }
      parsedUser.users.push(u)
      const stringData = this.stringifyJson(parsedUser)
      this.writeInFile(filePath, stringData)
      returnObj = { ...returnObj, success: true, message: "New user added" }
    } else {
      returnObj = { ...returnObj, error: true, message: "Email already in use" }
    }
  }
}

module.exports.parseJson = (stringify) => {
  let result
  try {
    result = JSON.parse(stringify)
  } catch (_) {
    result = null
  }
  return result
}

module.exports.stringifyJson = (json) => {
  let result
  try {
    result = JSON.stringify(json)
  } catch (_) {
    result = null
  }
  return result
}

module.exports.writeInFile = (filePath, data) => {
  fs.writeFileSync(filePath, data, 'utf-8');
  return "Data added"
}

module.exports.getUsers = () => {
  const filePath = path.join(__base, '/users/' + 'users.json').toString()
  const users = fs.readFileSync(filePath, 'utf-8')
  // Will return null if not found
  const parsedUser = this.parseJson(users)
  return { users: parsedUser }
}

module.exports.getUserById = (id) => {
  const filePath = path.join(__base, '/users/' + 'users.json').toString()
  const users = fs.readFileSync(filePath, 'utf-8')
  // Will return null if not found
  const parsedUser = this.parseJson(users)
  // Filter the id
  const found_user = parsedUser.users.filter(u => u.id == id);
  return { user: found_user }
}

module.exports.deleteUser = (id) => {
  const filePath = path.join(__base, '/users/' + 'users.json').toString()
  const users = fs.readFileSync(filePath, 'utf-8')
  // Will return null if not found
  const parsedUser = this.parseJson(users)
  // Filter the id
  const remained_users = parsedUser.users.filter(v => v.id != id);
  // Set the remaining array to the objet
  parsedUser.users = remained_users
  // parse and Write to file
  const stringData = this.stringifyJson(parsedUser);
  this.writeInFile(filePath, stringData)
  const remove_payload = { error: null, msg: "Requested id removed" }
  return { user: remove_payload }
}