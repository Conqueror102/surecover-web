"use client"

import { Star, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const doctors = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Endocrinology",
    avatar: "SC",
    rating: 4.9,
    reviews: 234,
    location: "New York, US",
    languages: ["English", "Mandarin"],
    experience: "15 years",
    price: "$99",
    available: true,
    tags: ["Diabetes", "Thyroid", "Hormones"],
  },
  {
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    avatar: "JW",
    rating: 4.8,
    reviews: 189,
    location: "London, UK",
    languages: ["English"],
    experience: "20 years",
    price: "$120",
    available: true,
    tags: ["Heart Disease", "Hypertension", "Cholesterol"],
  },
  {
    name: "Dr. Maria Rodriguez",
    specialty: "Primary Care",
    avatar: "MR",
    rating: 5.0,
    reviews: 312,
    location: "Miami, US",
    languages: ["English", "Spanish"],
    experience: "12 years",
    price: "$79",
    available: false,
    tags: ["General Health", "Preventive Care"],
  },
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Pulmonology",
    avatar: "AH",
    rating: 4.9,
    reviews: 156,
    location: "Dubai, UAE",
    languages: ["English", "Arabic"],
    experience: "18 years",
    price: "$110",
    available: true,
    tags: ["Asthma", "COPD", "Respiratory"],
  },
  {
    name: "Dr. Emily Thompson",
    specialty: "Mental Health",
    avatar: "ET",
    rating: 4.9,
    reviews: 278,
    location: "Toronto, CA",
    languages: ["English", "French"],
    experience: "10 years",
    price: "$95",
    available: true,
    tags: ["Anxiety", "Depression", "Stress"],
  },
  {
    name: "Dr. Raj Patel",
    specialty: "Dermatology",
    avatar: "RP",
    rating: 4.7,
    reviews: 201,
    location: "Sydney, AU",
    languages: ["English", "Hindi"],
    experience: "14 years",
    price: "$105",
    available: true,
    tags: ["Skin Care", "Acne", "Eczema"],
  },
]

const avatarColors = [
  "bg-gradient-to-br from-[#0D9B88] to-[#072E28]",
  "bg-gradient-to-br from-[#11C4AD] to-[#0D9B88]",
  "bg-gradient-to-br from-[#0B2545] to-[#1a3a60]",
  "bg-gradient-to-br from-[#17A85C] to-[#0D9B88]",
]

export function DoctorGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor, index) => (
        <motion.div
          key={doctor.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white border border-[rgba(10,20,40,0.06)] rounded-3xl overflow-hidden hover:border-[rgba(13,155,136,0.28)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif font-bold text-white text-lg flex-shrink-0 ${avatarColors[index % avatarColors.length]}`}>
                {doctor.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-[rgb(var(--dark))] mb-0.5 truncate">
                  {doctor.name}
                </h3>
                <p className="text-sm text-[rgb(var(--teal-hi))] mb-1">{doctor.specialty}</p>
                <div className="flex items-center gap-1 text-xs text-[rgb(var(--teal-hi))]">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-[rgba(10,20,40,0.40)]">({doctor.reviews})</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {doctor.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgba(13,155,136,0.08)] text-[rgb(var(--teal-hi))] text-xs font-semibold px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-[rgba(10,20,40,0.40)]">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {doctor.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {doctor.experience}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[rgba(10,20,40,0.06)] flex items-center justify-between">
            <div>
              {doctor.available && (
                <div className="flex items-center gap-1.5 text-xs text-[rgb(var(--green))] mb-1.5">
                  <div className="w-1.5 h-1.5 bg-[rgb(var(--green))] rounded-full" />
                  Available Now
                </div>
              )}
              <div className="font-serif text-2xl font-bold text-[rgb(var(--dark))] leading-none">
                {doctor.price}
                <span className="text-xs font-normal text-[rgba(10,20,40,0.40)] ml-1">/visit</span>
              </div>
            </div>
            <Button size="sm">
              <MessageCircle className="w-4 h-4" /> Book
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
