import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export type LoginFormValues = {
  email: string
  password: string
}

type LoginFormProps = {
  values: LoginFormValues
  errors: Partial<LoginFormValues & { form: string }>
  isLoading: boolean
  onChange: (field: keyof LoginFormValues, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function LoginForm({ values, errors, isLoading, onChange, onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-md">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
          Welcome back
        </h1>
        <p className="text-on-surface-variant mt-2">Sign in to continue to Editorial Appetite</p>
      </div>

      {/* Form-level error */}
      {errors.form && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {errors.form}
        </div>
      )}

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-on-surface" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="you@example.com"
            className="h-12 rounded-xl bg-surface-container-low px-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 text-on-surface placeholder:text-outline transition-all"
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-on-surface" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={values.password}
              onChange={(e) => onChange('password', e.target.value)}
              placeholder="••••••••"
              className="w-full h-12 rounded-xl bg-surface-container-low px-4 pr-12 border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 text-on-surface placeholder:text-outline transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 h-14 rounded-xl font-bold text-white transition-all active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, #ab2d00 0%, #ff7851 100%)' }}
        >
          {isLoading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      {/* Footer links */}
      <div className="mt-8 text-center text-sm text-on-surface-variant">
        Don't have an account?{' '}
        <Link to="/register" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}
