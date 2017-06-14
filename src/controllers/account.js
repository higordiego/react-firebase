import database from '../config/database'

addAccount(data){
  database.child('account').push(data, response => response)
}

updateAccount(id,data){
  database.child(`account/${id}`).update(data, response => response)
}

deleteAccount(id){
  database.child(`account/${id}`).delete(response => response)
}

export default = {
  addAccount,
  updateAccount,
  deleteAccount
}
