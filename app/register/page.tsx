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
      <label className="block font-display text-lg font-semibold text-primary">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-full bg-accent/60 px-3 py-2.5 shadow-inner ring-1 ring-accent">
        <Star
          className="h-6 w-6 shrink-0 fill-primary text-primary"
          aria-hidden="true"
        />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
    </div>
  )
}

export default function RegisterPage() {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="card-fun w-full max-w-sm rounded-[2rem] border-2 border-accent bg-card/95 px-7 py-8 shadow-xl"
      >
        <h1 className="text-center font-display text-3xl font-bold text-primary">
          Registrasi Akun
        </h1>

        <div className="mt-7 space-y-4">
          <StarInput label="No. Telepon" placeholder="Masukkan No. Telepon Anda" type="tel" />
          <StarInput label="Username" placeholder="Masukkan username" />
          <StarInput label="Password" placeholder="Masukkan password" type="password" />
        </div>

        <p className="mt-5 text-center text-xs text-foreground">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-bold text-primary underline">
            Masuk
          </Link>
        </p>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-full px-7 py-2 font-display font-semibold text-white shadow-md transition hover:brightness-95"
            style={{ backgroundColor: "oklch(0.55 0.16 250)" }}
          >
            Daftar
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}