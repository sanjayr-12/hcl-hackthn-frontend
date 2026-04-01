import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { LoginForm, type LoginFormValues } from '../components/LoginForm'
// import api from '@/lib/api'  ← uncomment and use when backend is ready

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export function LoginContainer() {
  const navigate = useNavigate()
  const [values, setValues] = useState<LoginFormValues>({ email: '', password: '' })
  const [errors, setErrors] = useState<Partial<LoginFormValues & { form: string }>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: keyof LoginFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Clear field error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const result = loginSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors: Partial<LoginFormValues> = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof LoginFormValues
        fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setIsLoading(true)
    try {
      // ── Temporary: navigate directly until API is ready ──────────
      // When backend is ready, replace this block with:
      //
      // const response = await api.post('/auth/login', {
      //   email: values.email,
      //   password: values.password,
      // })
      // localStorage.setItem('token', response.data.token)
      //
      navigate('/')
    } catch {
      setErrors({ form: 'Invalid email or password. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginForm
      values={values}
      errors={errors}
      isLoading={isLoading}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
