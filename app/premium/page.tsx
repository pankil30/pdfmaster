"use client";

import Link from "next/link";
import { Crown, Check } from "lucide-react";

export default function PremiumPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border bg-white p-10 shadow-sm">
        <div className="text-center">
          <Crown className="mx-auto h-16 w-16 text-yellow-500" />

          <h1 className="mt-4 text-4xl font-bold">
            Upgrade to Premium
          </h1>

          <p className="mt-3 text-gray-600">
            Get instant downloads, no waiting time,
            no ads, and faster processing.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-2 border-yellow-400 p-8">
          <h2 className="text-3xl font-bold">
            ₹99 / Month
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-600" />
              <span>Instant Downloads</span>
            </div>

            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-600" />
              <span>No Waiting Time</span>
            </div>

            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-600" />
              <span>Ad-Free Experience</span>
            </div>

            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-600" />
              <span>Priority Processing</span>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-yellow-500 py-3 font-semibold text-white hover:bg-yellow-600">
            Upgrade Now
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline"
          >
            Continue with Free Plan
          </Link>
        </div>
      </div>
    </div>
  );
}