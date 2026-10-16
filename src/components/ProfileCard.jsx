import {
  EnvelopeSimpleIcon,
  BookmarkSimpleIcon,
  StarIcon,
} from '@phosphor-icons/react';
import profile from '../assets/shikiro.jpg';
import Button from './Button';
function ProfileCard() {
  return (
    <>
      <div className="">
        <div className="">
          {/* Image Holder */}
          <div className="">
            <img
              src={profile}
              alt="Profile Image"
              fetchpriority="low"
              loading="lazy"
              decoding="async"
              className=""
            />
          </div>
          {/* Name and Description */}
          <div className="">
            {/* For Names */}
            <div className="">
              <p className="">Juan Dela Cruz</p>
            </div>

            {/* For Description */}
            <div className="">
              <p className=""></p>
            </div>
          </div>
          {/* Stats */}
          <div className="">
            {/* Left Section */}
            <div className="">
              <div className="">
                <p>4.2</p>
                <StarIcon size={32} />
              </div>

              <div className="">
                <p>Rating</p>
              </div>
            </div>
            {/* Mid Section */}
            <div className="">
              <div className="">
                <p>80</p>
              </div>

              <div className="">
                <p>Projects</p>
              </div>
            </div>
            {/* Right Section */}
            <div className="">
              <div className="">
                <p>$40/hr</p>
                <svg></svg>
              </div>

              <div className="">
                <p>Price</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              icon={EnvelopeSimpleIcon}
              iconSize={32}
              iconWeight="regular"
              className=""
              onClick={() => console.log('Contact clicked')}
            >
              Get In Touch
            </Button>
            <Button
              icon={BookmarkSimpleIcon}
              iconSize={32}
              iconWeight="fill"
              className=""
              aria-label="Bookmark profile"
              onClick={() => console.log('Bookmark clicked')}
            />
          </div>
          {/* Inner Div - Everything goes here */}
        </div>
        {/* Outer Div */}
      </div>
    </>
  );
}

export default ProfileCard;
