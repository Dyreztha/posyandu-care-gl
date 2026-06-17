"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import { AuthLayout } from "@/components/auth-layout"

function StarInput({
  label,
  placeholder,
  type = "text",
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <div className="space-y-2">
      <label className="block font-display text-lg font-semibold text-purple-800">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-3 shadow-sm ring-1 ring-yellow-200">
        <Star
          className="h-6 w-6 shrink-0 fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default function LoginPage() {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border-4 border-yellow-300 bg-white px-8 py-10 shadow-2xl"
      >
        <h1 className="text-center font-display text-3xl font-bold text-purple-800">
          Selamat Datang
        </h1>
        <p className="mt-3 text-center text-sm font-semibold text-purple-700">
          Monitoring Kesehatan Anak
        </p>
        <p className="mb-6 text-center text-xs text-gray-600">
          Silahkan masuk untuk melanjutkan
        </p>

        <div className="space-y-5">
          <StarInput label="Username" placeholder="Masukkan username" />
          <StarInput label="Password" placeholder="Masukkan password" type="password" />
        </div>

        <p className="mt-6 text-center text-xs text-gray-700">
          Belum punya akun?{" "}
          <Link href="/register" className="font-bold text-purple-800 underline hover:text-purple-600">
            Register
          </Link>
        </p>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-8 py-2.5 font-display font-semibold text-white shadow-md transition hover:bg-blue-600"
          >
            Masuk
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}