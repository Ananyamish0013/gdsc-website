import Image from 'next/image';
import SocialIcons from './SocialIcons';

interface EventCardProps {
  image: string;
  time: string;
  date: string;
  title: string;
  description: string;
  location: string;
  socialLinks?: {
    instagram?: string;
    github?: string;
    linkedin?: string;
    discord?: string;
  };
}

export default function EventCard({
  image,
  time,
  date,
  title,
  description,
  location,
  socialLinks
}: EventCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gray-100 p-5 sm:flex-row sm:gap-6 sm:p-6">
      {/* Event Image */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg sm:h-44 sm:w-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          {/* Time and Date */}
          <div className="text-sm font-medium text-[var(--color-text-gray)]">
            {time} | {date}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-tight text-[var(--color-text-black)] md:text-2xl">
            {title}
          </h3>

          {/* Speaker */}
          <p className="text-base font-medium text-[var(--color-text-black)]">
            {description}
          </p>

          {/* Location */}
          <p className="text-sm font-medium text-[var(--color-primary-blue)]">
            Location: {location}
          </p>
        </div>

        {/* Social Icons */}
        {socialLinks && (
          <div className="mt-1">
            <SocialIcons
              instagram={socialLinks.instagram}
              github={socialLinks.github}
              linkedin={socialLinks.linkedin}
              discord={socialLinks.discord}
              size="md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

