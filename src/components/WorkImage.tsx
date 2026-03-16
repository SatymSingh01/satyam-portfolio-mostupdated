import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video: videoFile, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleMouseEnter = () => {
    if (!videoFile) return;

    // videos should live in /public/videos/
    setVideoSrc(`/videos/${videoFile}`);
    setIsVideo(true);
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img src={image} alt={alt || "project preview"} />

        {isVideo && videoSrc && (
          <video src={videoSrc} autoPlay muted playsInline loop />
        )}
      </a>
    </div>
  );
};

export default WorkImage;