'use server'

import { users } from '@/lib/appwrite'
import { stringfy } from '@/lib/utils'

export const getUser = async (userId: string) => {
  const userData = await users.get(userId)
  return stringfy(userData)
}
