"use client"

import { Search, MapPin, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DoctorSearch() {
  return (
    <div className="bg-white border border-[rgba(10,20,40,0.06)] rounded-3xl p-8 mb-12 shadow-lg">
      <div className="grid md:grid-cols-4 gap-4">
        {/* Search by Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[rgba(10,20,40,0.40)] uppercase tracking-wider">
            Doctor Name
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(10,20,40,0.40)]" />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full bg-[rgb(var(--navy-2))] border border-[rgba(10,20,40,0.06)] rounded-xl pl-10 pr-4 py-3 text-sm text-[rgb(var(--dark))] placeholder:text-[rgba(10,20,40,0.40)] focus:outline-none focus:border-[rgb(var(--teal))] transition-colors"
            />
          </div>
        </div>

        {/* Specialty */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[rgba(10,20,40,0.40)] uppercase tracking-wider">
            Specialty
          </label>
          <div className="relative">
            <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(10,20,40,0.40)]" />
            <select className="w-full bg-[rgb(var(--navy-2))] border border-[rgba(10,20,40,0.06)] rounded-xl pl-10 pr-4 py-3 text-sm text-[rgb(var(--dark))] focus:outline-none focus:border-[rgb(var(--teal))] transition-colors appearance-none">
              <option>All Specialties</option>
              <option>Primary Care</option>
              <option>Cardiology</option>
              <option>Endocrinology</option>
              <option>Dermatology</option>
              <option>Mental Health</option>
              <option>Pediatrics</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[rgba(10,20,40,0.40)] uppercase tracking-wider">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(10,20,40,0.40)]" />
            <select className="w-full bg-[rgb(var(--navy-2))] border border-[rgba(10,20,40,0.06)] rounded-xl pl-10 pr-4 py-3 text-sm text-[rgb(var(--dark))] focus:outline-none focus:border-[rgb(var(--teal))] transition-colors appearance-none">
              <option>All Locations</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>UAE</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button size="lg" className="w-full">
            <Search className="w-4 h-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  )
}
