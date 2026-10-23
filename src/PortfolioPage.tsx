
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Video,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

import {
  portfolioVideos,
  portfolioPhotos,
  type PortfolioPhoto,
  type PortfolioVideo,
} from "./portfolioProjects";

import "./portfolio.css";

type Tab = "all" | "videos" | "photos";
const tabs: Tab[] = ["all", "videos", "photos"];

async function mediaExists(
  url: string,
  kind: "image" | "video"
): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      cache: "no-cache",
    });

    if (!response.ok) return false;

    const type = (
      response.headers.get("content-type") || ""
    ).toLowerCase();

    // Cloudflare can return index.html for missing files.
    // Never mistake that response for an image or video.
    if (type.includes("text/html")) return false;

    return (
      type.startsWith(kind + "/") ||
      type.includes("application/octet-stream")
    );
  } catch {
    return false;
  }
}

export default function PortfolioPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [videos, setVideos] = useState<PortfolioVideo[]>([]);
  const [photos, setPhotos] = useState<PortfolioPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedVideo, setSelectedVideo] =
    useState<PortfolioVideo | null>(null);

  const [photoIndex, setPhotoIndex] =
    useState<number | null>(null);

  const [videoError, setVideoError] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);
  const photoStageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  // Only Portfolio metadata is changed. Restore it on exit.
  useEffect(() => {
    const oldTitle = document.title;
    const description = document.querySelector(
      'meta[name="description"]'
    );
    const oldDescription =
      description?.getAttribute("content");

    document.title =
      "Photography & Videography Portfolio | CLICKWORTHY BY DTC";

    description?.setAttribute(
      "content",
      "Explore the photography, event reels, product visuals, commercial video and creative work of Clickworthy by DTC and Divya Chheda."
    );

    const added: HTMLElement[] = [];

    const addMeta = (property: string, content: string) => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", property);
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
      added.push(meta);
    };

    addMeta(
      "og:title",
      "Portfolio | CLICKWORTHY BY DTC"
    );
    addMeta(
      "og:description",
      "Photography, videography and visual storytelling by CLICKWORTHY BY DTC."
    );
    addMeta(
      "og:url",
      "https://clickworthybydtc.com/portfolio"
    );

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href =
      "https://clickworthybydtc.com/portfolio";
    document.head.appendChild(canonical);
    added.push(canonical);

    return () => {
      document.title = oldTitle;
      if (oldDescription !== null && oldDescription !== undefined) {
        description?.setAttribute(
          "content",
          oldDescription
        );
      }
      added.forEach((element) => element.remove());
    };
  }, []);

  // Detect only real uploaded media.
  useEffect(() => {
    let active = true;

    async function scanMedia() {
      const [videoResults, photoResults] =
        await Promise.all([
          Promise.all(
            portfolioVideos.map((item) =>
              mediaExists(item.src, "video")
            )
          ),
          Promise.all(
            portfolioPhotos.map((item) =>
              mediaExists(item.src, "image")
            )
          ),
        ]);

      if (!active) return;

      setVideos(
        portfolioVideos.filter(
          (_, index) => videoResults[index]
        )
      );

      setPhotos(
        portfolioPhotos.filter(
          (_, index) => photoResults[index]
        )
      );

      setLoading(false);
    }

    scanMedia();

    return () => {
      active = false;
    };
  }, []);

  const modalOpen =
    selectedVideo !== null || photoIndex !== null;

  function closeModal() {
    setSelectedVideo(null);
    setPhotoIndex(null);
    setVideoError(false);
  }

  function movePhoto(direction: number) {
    setPhotoIndex((index) => {
      if (index === null || photos.length === 0) {
        return null;
      }
      return (
        index + direction + photos.length
      ) % photos.length;
    });
  }

  useEffect(() => {
    if (!modalOpen) return;

    const oldOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (photoIndex !== null) {
        if (event.key === "ArrowRight") {
          movePhoto(1);
        }
        if (event.key === "ArrowLeft") {
          movePhoto(-1);
        }
      }
    }

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [modalOpen, photoIndex, photos.length]);

  function handleTabKey(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let next = index;

    if (event.key === "ArrowRight") {
      next = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      next = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setTab(tabs[next]);

    document.getElementById(
      "dtcp-tab-" + tabs[next]
    )?.focus();
  }

  function videoCard(project: PortfolioVideo) {
    return (
      <article
        className={
          "dtcp-video-card dtcp-" + project.orientation
        }
        key={project.id}
      >
        <button
          type="button"
          className="dtcp-poster"
          onClick={() => {
            setVideoError(false);
            setSelectedVideo(project);
          }}
          aria-label={"Play " + project.title}
        >
          <img
            src={project.poster}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="dtcp-play">
            <Play size={27} fill="currentColor" />
          </span>
          <span className="dtcp-poster-label">
            {project.orientation === "portrait"
              ? "VERTICAL FILM"
              : "LANDSCAPE FILM"}
          </span>
        </button>

        <div className="dtcp-card-content">
          <span className="dtcp-category">
            {project.category}
          </span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>{project.role}</small>
        </div>
      </article>
    );
  }

  function photoCollection(
    collection: "commercial" | "events",
    heading: string,
    subtitle: string
  ) {
    const items = photos.filter(
      (photo) => photo.collection === collection
    );

    if (!items.length) return null;

    return (
      <section className="dtcp-photo-collection">
        <div className="dtcp-collection-heading">
          <div>
            <span className="dtcp-kicker">
              PHOTOGRAPHY COLLECTION
            </span>
            <h3>{heading}</h3>
            <p>{subtitle}</p>
          </div>
          <span className="dtcp-count">
            {items.length} photographs
          </span>
        </div>

        <div className="dtcp-photo-grid">
          {items.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className="dtcp-photo-card"
              onClick={() =>
                setPhotoIndex(
                  photos.findIndex(
                    (p) => p.id === photo.id
                  )
                )
              }
              aria-label={"View " + photo.title}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="dtcp-photo-label">
                <strong>{photo.title}</strong>
                <small>{photo.category}</small>
              </span>
            </button>
          ))}
        </div>
      </section>
    );
  }

  const currentPhoto =
    photoIndex !== null
      ? photos[photoIndex]
      : null;

  return (
    <main className="dtcp-page">
      <section className="dtcp-hero">
        <div className="wrap">
          <span className="dtcp-kicker">
            CLICKWORTHY BY DTC · PORTFOLIO
          </span>
          <h1>
            Our Work.
            <br />
            <em>Our Perspective.</em>
          </h1>
          <p>
            Photography, videography and creative
            production — capturing moments, products
            and stories through thoughtful visuals.
          </p>
        </div>
      </section>

      <div className="dtcp-content wrap">
        <div
          className="dtcp-tabs"
          role="tablist"
          aria-label="Filter portfolio work"
        >
          {tabs.map((item, index) => (
            <button
              type="button"
              key={item}
              id={"dtcp-tab-" + item}
              role="tab"
              aria-selected={tab === item}
              aria-controls="dtcp-results"
              tabIndex={tab === item ? 0 : -1}
              className={
                tab === item ? "dtcp-active" : ""
              }
              onClick={() => setTab(item)}
              onKeyDown={(event) =>
                handleTabKey(event, index)
              }
            >
              {item === "all"
                ? "All Work"
                : item === "videos"
                ? "Videos"
                : "Photos"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="dtcp-loading" role="status">
            Checking available portfolio media…
          </p>
        ) : (
          <div
            id="dtcp-results"
            role="tabpanel"
            aria-labelledby={"dtcp-tab-" + tab}
          >
            {(tab === "all" || tab === "videos") && (
              <section className="dtcp-gallery-section">
                <div className="dtcp-section-heading">
                  <span className="dtcp-kicker">
                    MOTION & STORYTELLING
                  </span>
                  <h2>Featured Videography</h2>
                  <p>
                    Event reels, product stories and
                    creative short-form video work.
                  </p>
                </div>

                {videos.length ? (
                  <div
                    className={
                      "dtcp-video-grid dtcp-count-" +
                      Math.min(videos.length, 4)
                    }
                  >
                    {videos.map(videoCard)}
                  </div>
                ) : (
                  <div className="dtcp-empty">
                    <Video size={30} />
                    <p>
                      Our videos are being prepared
                      for the portfolio.
                    </p>
                  </div>
                )}
              </section>
            )}

            {(tab === "all" || tab === "photos") && (
              <section className="dtcp-gallery-section">
                <div className="dtcp-section-heading">
                  <span className="dtcp-kicker">
                    FRAMES & DETAILS
                  </span>
                  <h2>Photography</h2>
                  <p>
                    A collection of commercial,
                    creative and event photography.
                  </p>
                </div>

                {photos.length ? (
                  <>
                    {photoCollection(
                      "commercial",
                      "Commercial & Creative",
                      "Products, food, fashion, portraits and beauty."
                    )}
                    {photoCollection(
                      "events",
                      "Events & Celebrations",
                      "People, performances, gatherings and meaningful moments."
                    )}
                  </>
                ) : (
                  <div className="dtcp-empty">
                    <Camera size={30} />
                    <p>
                      Our photography gallery is
                      being prepared.
                    </p>
                  </div>
                )}
              </section>
            )}
          </div>
        )}
      </div>

      <section className="dtcp-approach">
        <div className="wrap dtcp-approach-grid">
          <div>
            <span className="dtcp-kicker">
              BEHIND THE LENS
            </span>
            <h2>The Approach Behind the Lens</h2>
          </div>

          <div>
            <p>
              Every project starts with understanding
              the moment, subject or creative brief.
              Composition, lighting, framing and
              thoughtful camera movement shape how
              we bring that vision to life.
            </p>
            <p>
              Our hands-on work includes photography
              and videography using the Sony Alpha
              A6400 and Apple iPhone 13. Where
              applicable, editing and post-production
              may be coordinated with collaborators.
            </p>

            <div className="dtcp-equipment">
              <span>Sony Alpha A6400</span>
              <span>Apple iPhone 13</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dtcp-founder">
        <div className="wrap dtcp-founder-grid">
          <div className="dtcp-founder-identity">
            <div
              className="dtcp-monogram"
              aria-hidden="true"
            >
              DC
            </div>
            <span className="dtcp-kicker">
              MEET THE CREATIVE
            </span>
            <h2>About <em>Divya Chheda</em></h2>
            <p className="dtcp-founder-tagline">
              Creative Vision. Digital Thinking.
              Always Evolving.
            </p>
            <div className="dtcp-founder-socials">
              <a
                href="https://www.linkedin.com/in/divyachheda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn <ExternalLink size={14} />
              </a>
              <a
                href="https://www.instagram.com/divyap_creator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={17} />
                Instagram <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="dtcp-founder-bio">
            <p>
              Divya Chheda is a content creator,
              photographer, videographer, affiliate
              marketer and social media manager with
              four years of experience working across
              brands, content formats and creative
              projects in the media industry.
            </p>

            <p>
              Working with an active team of four,
              Divya brings together visual storytelling,
              creative production, social media
              management and digital solutions.
              Divya's approach is rooted in understanding
              different project requirements, adapting
              to new creative directions and delivering
              work with attention to composition,
              detail and purpose.
            </p>

            <p>
              Divya's professional learning and
              credentials include Google certifications,
              Canva certification and involvement as
              a Google Gemini Ambassador. Divya actively
              explores AI-assisted creative workflows
              and digital technologies.
            </p>

            <h3>Creative & Digital Toolkit</h3>
            <div className="dtcp-tools">
              {[
                "Adobe Photoshop",
                "Premiere (Mobile)",
                "Illustrator (iPad)",
                "Lightroom Classic",
                "Figma",
                "Canva",
                "VN",
                "CapCut",
                "Edits by Instagram",
                "Notion",
                "GitHub",
              ].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <h3>Let's Connect</h3>
            <p>
              Every project brings a new perspective,
              challenge and opportunity to learn.
              Divya enjoys connecting with people
              across industries, creative disciplines
              and different professional backgrounds.
            </p>
            <p>
              Whether you're a brand, creator, event
              organizer or someone with a fresh idea,
              let's connect, exchange perspectives
              and explore what we can create together.
            </p>
            <a
              className="dtcp-connect-link"
              href="https://www.linkedin.com/in/divyachheda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with Divya
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* The existing V2 enquiry CTA and footer render
          automatically after this component. */}

      {selectedVideo && (
        <div
          className="dtcp-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <button
            ref={closeRef}
            className="dtcp-modal-close"
            type="button"
            onClick={closeModal}
            aria-label="Close video"
          >
            <X size={24} />
          </button>

          <div className="dtcp-video-dialog">
            <video
              key={selectedVideo.id}
              src={selectedVideo.src}
              controls
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
              className={
                selectedVideo.orientation === "portrait"
                  ? "dtcp-player-portrait"
                  : "dtcp-player-landscape"
              }
            >
              Your browser does not support
              HTML5 video playback.
            </video>

            <div className="dtcp-modal-info">
              <h3>{selectedVideo.title}</h3>
              <p>
                {selectedVideo.category} ·{" "}
                {selectedVideo.role}
              </p>

              {videoError && (
                <p role="alert">
                  This video could not be played.
                  Check its filename and MP4 encoding.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {currentPhoto && (
        <div
          className="dtcp-modal"
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <button
            ref={closeRef}
            className="dtcp-modal-close"
            type="button"
            onClick={closeModal}
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <button
            className="dtcp-prev"
            type="button"
            onClick={() => movePhoto(-1)}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="dtcp-photo-dialog"
            ref={photoStageRef}
            onTouchStart={(event) => {
              touchX.current =
                event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchX.current === null) return;

              const delta =
                event.changedTouches[0].clientX -
                touchX.current;

              if (Math.abs(delta) > 55) {
                movePhoto(delta < 0 ? 1 : -1);
              }
              touchX.current = null;
            }}
          >
            <img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
            />

            <div className="dtcp-modal-info">
              <h3>{currentPhoto.title}</h3>
              <p>
                {currentPhoto.category} ·{" "}
                {currentPhoto.credit}
              </p>
              <button
                type="button"
                className="dtcp-fullscreen"
                onClick={() =>
                  photoStageRef.current
                    ?.requestFullscreen?.()
                }
              >
                <Maximize2 size={16} />
                Fullscreen
              </button>
            </div>
          </div>

          <button
            className="dtcp-next"
            type="button"
            onClick={() => movePhoto(1)}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}
