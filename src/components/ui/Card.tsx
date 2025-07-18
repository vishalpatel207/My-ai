import React from "react";
import Image from "next/image";

export interface CardProps {
  image?: string;
  avatar?: string;
  icon?: string;
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  badge?: string;
  price?: string;
  role?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  // For custom className or style
  className?: string;
  // For custom content (e.g. testimonial text)
  content?: React.ReactNode;
  // For custom top-right element (e.g. View Project, badge, etc)
  topRight?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  image,
  avatar,
  icon,
  title,
  subtitle,
  description,
  features,
  badge,
  price,
  role,
  actions,
  children,
  className = "",
  content,
  topRight,
}) => {
  return (
    <div
      className={
        "bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden relative p-0 " +
        className
      }
    >
      {/* Image or Avatar */}
      {image && (
        <Image
          src={image}
          alt={title}
          width={550}
          height={300}
          className="object-cover w-full h-[200px] sm:h-[250px]"
        />
      )}
      {avatar && (
        <div className="flex-shrink-0 flex justify-center pt-6">
          <Image
            src={avatar}
            alt={title}
            width={125}
            height={165}
            className="rounded-2xl object-cover w-[125px] h-auto"
          />
        </div>
      )}
      <div className="relative p-6 pt-5 flex-1 flex flex-col">
        {/* Top right custom element (badge, view project, etc) */}
        {topRight && (
          <div className="absolute top-6 right-6 z-10">{topRight}</div>
        )}
        {/* Badge */}
        {badge && (
          <span className="absolute top-6 right-6 bg-white text-black text-xs font-medium px-3 py-1 rounded-full border border-gray-300">
            {badge}
          </span>
        )}
        {/* Icon (for testimonials) */}
        {icon && (
          <div className="flex justify-end mb-2">
            <Image src={icon} alt="icon" width={24} height={24} />
          </div>
        )}
        {/* Title, Subtitle, Role */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-500 text-base mb-2">{subtitle}</p>
        )}
        {role && (
          <span className="text-gray-500 text-sm mb-2">{role}</span>
        )}
        {/* Price */}
        {price && (
          <div className="flex items-end mb-4">
            <span className="text-3xl sm:text-4xl font-medium text-black mr-1">
              {price}
            </span>
            <span className="text-base text-gray-400 font-medium mb-1">/mo</span>
          </div>
        )}
        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-base">
                <Image src="/check-mark.svg" alt="Check" width={20} height={20} />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {/* Description or custom content */}
        {description && <p className="text-gray-600 text-base mb-2">{description}</p>}
        {content}
        {/* Actions (buttons, etc) */}
        {actions && <div className="mt-4">{actions}</div>}
        {/* Children for extra flexibility */}
        {children}
      </div>
    </div>
  );
};

export default Card; 