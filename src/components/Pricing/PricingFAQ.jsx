import React from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

function PricingFAQ() {
  return (
    <section className="bg-white px-6 py-10 sm:px-8 lg:px-10">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#F1ECFF] px-4 py-2 shadow-sm">

            <CircleHelp
              size={14}
              className="text-[#5820C7]"
              fill="#DCD0FF"
            />

            <span className="text-[11px] font-bold text-[#5820C7]">
              Frequently Asked Questions
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#10194A]">
            Have Questions? We've Got Answers.
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Everything you need to know about BirthBuddy pricing and plans.
          </p>

        </div>

        {/* Questions */}

        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">

          {[
            "Can I use BirthBuddy for free?",
            "Can I cancel anytime?",
            "How do WhatsApp reminders work?",
            "Is my data secure?",
            "Can I change my plan later?",
            "What happens to my data if I cancel?",
          ].map((question) => (

            <div
              key={question}
              className="group flex cursor-pointer items-center justify-between rounded-xl border border-[#E9E6F0] bg-white px-5 py-4 shadow-[0_6px_18px_rgba(40,25,90,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D8CBFF] hover:bg-[#FCFAFF] hover:shadow-[0_10px_25px_rgba(88,32,199,0.08)]"
            >

              <span className="text-xs font-bold text-[#10194A]">
                {question}
              </span>

              <ChevronDown
                size={17}
                className="text-[#10194A] transition-transform duration-300 group-hover:text-[#5820C7]"
                strokeWidth={2.5}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PricingFAQ;