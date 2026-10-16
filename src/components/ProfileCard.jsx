import {
  EnvelopeSimpleIcon,
  BookmarkSimpleIcon,
  StarIcon,
  SealCheckIcon,
} from '@phosphor-icons/react';
import profile from '../assets/shikiro.jpg';
import Button from './Button';
import Stats from './Stats';

function ProfileCard() {
  return (
    <div className="flex items-center justify-center">
      {/* Frame: the outer border around the card */}
      <div className="max-w-xs rounded-4xl bg-black/90 p-3">
        {/* Card: relative so the overlay can be positioned inside it,
            overflow-hidden so the photo gets rounded corners */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Full-bleed photo */}
          <img
            src={profile}
            alt="Profile Image"
            fetchpriority="low"
            loading="lazy"
            decoding="async"
            className="aspect-9/16 w-full object-cover object-right"
          />

          {/* Gradient overlay pinned to the bottom, holds all content */}
          <section className="absolute inset-x-0 bottom-0 flex flex-col gap-5 bg-linear-to-t from-black/95 via-black/70 to-transparent p-5 pt-28">
            {/* Name + description */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-white">
                  Kageyoshi Kiro
                </p>
                <SealCheckIcon size={20} weight="fill" color="#3B82F6" />
              </div>
              <p className="text-xs leading-relaxed text-white/80">
                May the shine of the sun and the scent of flowers never fades.
              </p>
            </div>

            {/* Stats with short vertical dividers */}
            <div className="flex items-center">
              {/* Rating */}
              <div className="flex flex-1 flex-col items-center justify-center">
                <Stats
                  icon={StarIcon}
                  iconSize={18}
                  iconWeight="fill"
                  iconColor="#FFDF00"
                  divisionClasses="flex flex-row items-center justify-center gap-1"
                  className="text-lg font-semibold text-white"
                >
                  4.2
                </Stats>
                <Stats divisionClasses="" className="text-xs text-white/70">
                  Rating
                </Stats>
              </div>

              <div className="h-8 w-px bg-white/30" />

              {/* Projects */}
              <div className="flex flex-1 flex-col items-center justify-center">
                <Stats
                  divisionClasses=""
                  className="text-lg font-semibold text-white"
                >
                  80
                </Stats>
                <Stats divisionClasses="" className="text-xs text-white/70">
                  Projects
                </Stats>
              </div>

              <div className="h-8 w-px bg-white/30" />

              {/* Price */}
              <div className="flex flex-1 flex-col items-center justify-center">
                <Stats
                  divisionClasses=""
                  className="text-lg font-semibold text-white"
                >
                  $40/hr
                </Stats>
                <Stats divisionClasses="" className="text-xs text-white/70">
                  Price
                </Stats>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                icon={EnvelopeSimpleIcon}
                iconSize={20}
                iconWeight="regular"
                className="flex flex-1 cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-150 hover:bg-white/80"
                onClick={() => console.log('Contact clicked')}
              >
                Get In Touch
              </Button>

              {/* Glass button: translucent + blur + faint border */}
              <Button
                icon={BookmarkSimpleIcon}
                iconSize={22}
                iconWeight="regular"
                aria-label="Bookmark profile"
                className="cursor-pointer rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-150 hover:bg-white/50"
                onClick={() => console.log('Bookmark clicked')}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
