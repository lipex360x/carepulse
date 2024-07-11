'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { decryptKey, encryptKey } from '@/lib/utils'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { MouseEvent, useEffect, useState } from 'react'

export const PasskeyModal = () => {
  const router = useRouter()
  const path = usePathname()
  const [open, setOpen] = useState(true)
  const [passKey, setPassKey] = useState('')
  const [error, setError] = useState('')

  const closeModal = () => {
    setOpen(false)
    router.push('/')
  }

  const encryptedKey = typeof window !== 'undefined' ? window.localStorage.getItem('accessKey') : null

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey)

    if (path && accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      setOpen(false)
      return router.push('/admin')
    }
    setOpen(true)
  }, [encryptedKey])

  const validatePasskey = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (passKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) return setError('Invalid passkey')
    const encryptedKey = encryptKey(passKey)
    localStorage.setItem('accessKey', encryptedKey)
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin access verification{' '}
            <Image
              src="/assets/icons/close.svg"
              width={20}
              height={20}
              alt="close"
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>TTo access admin page, please enter the passkey</AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <InputOTP maxLength={6} value={passKey} onChange={(value) => setPassKey(value)}>
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>
          {error && <p className="shad-error text-14-regular mt-4 flex justify-center">{error}</p>}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction className="shad-primary-btn w-full" onClick={(e) => validatePasskey(e as unknown as any)}>
            Enter Admin Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
