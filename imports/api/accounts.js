import { Mongo } from 'meteor/mongo'
import { Accounts } from 'meteor/accounts-base'

if (!Accounts.findUserByEmail('test@gmail.com')) {
  Accounts.createUser({ email: 'test@gmail.com', password: 'test' })
}