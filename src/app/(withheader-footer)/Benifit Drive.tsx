import React from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Button, { ContactUsButton } from "@/components/ui/Button";

const features = [
  {
    label: "Experienced AI experts",
    icon: "/information.svg",
    pixelBloom: "Highly experienced team",
    pixelBloomCheck: true,
    otherAgency: "Less experienced or generalized teams",
    otherAgencyCheck: false,
  },
  {
    label: "Tailored AI solutions",
    icon: "/information.svg",
    pixelBloom: "Highly experienced team",
    pixelBloomCheck: true,
    otherAgency: "Generic, off-the-shelf models",
    otherAgencyCheck: false,
  },
  {
    label: "Specialized in AI model development",
    icon: "/information.svg",
    pixelBloom: "Focused AI development",
    pixelBloomCheck: true,
    otherAgency: "Broader development services",
    otherAgencyCheck: false,
  },
  {
    label: "Robust data privacy and security",
    icon: "/information.svg",
    pixelBloom: "Prioritized data security",
    pixelBloomCheck: true,
    otherAgency: "Potential data breaches or misuse",
    otherAgencyCheck: false,
  },
  {
    label: "Comprehensive training programs",
    icon: "/information.svg",
    pixelBloom: "Prioritized data security",
    pixelBloomCheck: true,
    otherAgency: "Lack of training and resources",
    otherAgencyCheck: false,
  },
  {
    label: "Scalable AI models",
    icon: "/information.svg",
    pixelBloom: "Focused AI development",
    pixelBloomCheck: true,
    otherAgency: "Limited scalability",
    otherAgencyCheck: false,
  },
];

const BenefitDrive = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-2 sm:py-16 sm:px-4 rounded-3xl mb-26">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <span className="flex items-center border bg-white border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
            <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            Benefits of choosing us{" "}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="font-medium text-black leading-tight text-3xl md:text-5xl lg:text-6xl">
            Benefits that <br />
            Drive{" "}
            <span className="font-medium text-gray-500 ">
              Pixel Bloom Success
            </span>
          </h1>
          <ContactUsButton />
        </div>

        <div className="overflow-x-auto bg-gray-100 rounded-2xl">
          <table className="w-full border-collapse divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="py-5 text-2xl font-medium text-left text-black">
                  Features
                </th>
                <th className="py-5 text-2xl font-medium text-center text-black bg-white rounded-t-2xl hidden sm:table-cell">
                  Pixel Bloom
                </th>
                <th className="py-5 text-2xl font-medium text-center text-black hidden md:table-cell">
                  Other AI Model Agencies
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((row, idx) => (
                <tr key={idx} className="align-middle">
                  <td className="py-5 text-base font-normal text-left text-black bg-gray-100">
                    <div className="flex items-center gap-2 leading-tight">
                      <span className="leading-tight">{row.label}</span>
                      {row.icon && (
                        <Image
                          src={row.icon}
                          alt={row.label}
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                      )}
                    </div>
                  </td>

                  <td className="text-base px-6 py-5 bg-white hidden sm:table-cell -md text-center">
                    <div className="inline-flex items-center gap-[10px] leading-tight text-black justify-center">
                      {row.pixelBloomCheck ? (
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 shrink-0" />
                      )}
                      <span className="leading-tight">{row.pixelBloom}</span>
                    </div>
                  </td>

                  <td className="text-base px-6 py-5 text-[#292929] hidden md:table-cell text-center">
                    <div className="flex flex-row items-center gap-2 justify-center">
                      {row.otherAgencyCheck ? (
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 shrink-0" />
                      )}
                      <span className="leading-tight">{row.otherAgency}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BenefitDrive;
