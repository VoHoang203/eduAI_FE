import React from "react";
import { useState } from "react"
import {Link ,useNavigate} from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"


const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useNavigate()
  const [error] = useState("")
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
      // Store user data in localStorage for demo purposes
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: values.username,
          email: values.email,
        }),
      )
      router("/profile")
    }, 1500)
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        padding: "3rem 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            Create an account
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "0.875rem",
            }}
          >
            Enter your information to create an account
          </p>
        </div>

        <div style={{ padding: "1.5rem" }}>
          {error && (
            <div
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                color: "#ef4444",
                fontSize: "0.875rem",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                marginBottom: "1rem",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "500" }}>Username</label>
              <input
                type="text"
                placeholder="full name "
                {...form.register("username")}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  fontSize: "0.875rem",
                }}
              />
              {form.formState.errors.username && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  {form.formState.errors.username.message}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "500" }}>Email</label>
              <input
                type="email"
                placeholder="name.fulle@example.com"
                {...form.register("email")}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  fontSize: "0.875rem",
                }}
              />
              {form.formState.errors.email && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "500" }}>Password</label>
              <input
                type="password"
                {...form.register("password")}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  fontSize: "0.875rem",
                }}
              />
              {form.formState.errors.password && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "500" }}>Confirm Password</label>
              <input
                type="password"
                {...form.register("confirmPassword")}
                style={{
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  fontSize: "0.875rem",
                }}
              />
              {form.formState.errors.confirmPassword && (
                <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                backgroundColor: "#0284c7",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontWeight: "500",
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 style={{ width: "1rem", height: "1rem", animation: "spin 1s linear infinite" }} />
                  Creating account...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>

        <div
          style={{
            padding: "1.5rem",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#0284c7", fontWeight: "500", textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
