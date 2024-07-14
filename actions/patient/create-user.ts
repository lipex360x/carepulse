'use server'

import { users } from '@/lib/appwrite'
import { ID, Query } from 'node-appwrite'

export const createUser = async (user: CreateUserParams) => {
  console.log('HERE')
  const authData = await users.list([Query.equal('email', [user.email])])
  if (authData.total) return authData.users[0]
  return users.create(ID.unique(), user.email, user.phone, undefined, user.name)
}
