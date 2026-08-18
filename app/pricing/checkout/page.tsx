"use client";

import { useState } from "react";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Connect your payment gateway here
    // Example: Razorpay / Stripe

    setTimeout(() => {
      setLoading(false);
      alert("Payment processing...");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Complete Your Purchase
          </h1>

          <p className="mt-2 text-slate-500">
            Secure checkout for PDFMaster
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Payment Form */}
          <div className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-3">
                <CreditCard className="text-emerald-600" size={24} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Payment Details
                </h2>

                <p className="text-sm text-slate-500">
                  Enter your details to continue
                </p>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Card Number
                </label>

                <input
                  type="text"
                  required
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                {/* Expiry */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* CVV */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    CVV
                  </label>

                  <input
                    type="password"
                    required
                    placeholder="•••"
                    maxLength={4}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <Lock size={20} />
                    Pay ₹499
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Lock size={16} />
                Secure and encrypted payment
              </div>

            </form>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-xl font-semibold text-slate-900">
              Order Summary
            </h2>

            <div className="rounded-xl bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 text-emerald-500"
                  size={22}
                />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    PDFMaster Pro
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Lifetime access
                  </p>
                </div>
              </div>
            </div>

            <div className="my-5 border-t border-slate-200" />

            <div className="flex justify-between text-slate-600">
              <span>Price</span>
              <span>₹499</span>
            </div>

            <div className="mt-3 flex justify-between text-slate-600">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <div className="my-5 border-t border-slate-200" />

            <div className="flex justify-between text-xl font-bold text-slate-900">
              <span>Total</span>
              <span>₹499</span>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}