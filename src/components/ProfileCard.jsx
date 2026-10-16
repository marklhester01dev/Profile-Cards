import {
  EnvelopeSimpleIcon,
  BookmarkSimpleIcon,
  StarIcon,
} from '@phosphor-icons/react';
import profile from '../assets/shikiro.jpg';
import Button from './Button';
import Stats from './Stats';
function ProfileCard() {
  return (
    <>
      {/* Card Group */}
      <div className="flex flex-row items-center justify-center">
        {/* Outer Div - card container*/}
        <div className="flex max-w-xs flex-row items-center justify-center rounded-2xl bg-black/90 px-4 py-4">
          {/* Inner Div - Everything goes here */}
          <div className="relative z-0 flex flex-col gap-4">
            {/* Image Holder */}
            <div className="bg-white object-cover">
              <img
                src={profile}
                alt="Profile Image"
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                className="aspect-9/16 w-full object-cover object-right"
              />
            </div>

            <section className="absolute bottom-0 z-1 flex flex-col gap-8 bg-black/60">
              {/* Name and Ratings */}
              <div className="flex flex-col">
                {/* Name and Description */}
                <div className="">
                  {/* For Names */}
                  <div className="">
                    <p className="text-xl text-white">Juan Dela Cruz</p>
                  </div>

                  {/* For Description */}
                  <div className="">
                    <p className="text-xs leading-relaxed text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum, aperiam.
                    </p>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex flex-row">
                  {/* Left Section */}
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <Stats
                      icon={StarIcon}
                      iconSize={20}
                      iconWeight="fill"
                      iconColor="#FFDF00"
                      divisionClasses="flex flex-row gap-2 items-center justify-center"
                      className="text-xl text-white"
                    >
                      4.2
                    </Stats>

                    <Stats divisionClasses="" className="text-sm text-white">
                      Rating
                    </Stats>
                  </div>
                  {/* Mid Section */}
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <Stats divisionClasses="" className="text-xl text-white">
                      80
                    </Stats>

                    <Stats divisionClasses="" className="text-sm text-white">
                      Projects
                    </Stats>
                  </div>
                  {/* Right Section */}
                  <div className="flex flex-1 flex-col items-center justify-center">
                    <Stats divisionClasses="" className="text-xl text-white">
                      $40
                    </Stats>

                    <Stats divisionClasses="" className="text-sm text-white">
                      Price
                    </Stats>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-3">
                <Button
                  icon={EnvelopeSimpleIcon}
                  iconSize={28}
                  iconWeight="regular"
                  className="flex w-full flex-row items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black"
                  onClick={() => console.log('Contact clicked')}
                >
                  Get In Touch
                </Button>
                <Button
                  icon={BookmarkSimpleIcon}
                  iconSize={24}
                  iconWeight="regular"
                  className="rounded-full bg-white p-4 text-black"
                  aria-label="Bookmark profile"
                  onClick={() => console.log('Bookmark clicked')}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
