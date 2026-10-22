export type PortfolioVideo = {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  src: string;
  poster: string;
  orientation: "portrait" | "landscape";
};

export type PortfolioPhoto = {
  id: string;
  title: string;
  category: string;
  collection: "events" | "commercial";
  src: string;
  alt: string;
  credit: string;
};

const number = (n: number) => String(n).padStart(2, "0");

export const portfolioVideos: PortfolioVideo[] = [
  ...Array.from({ length: 4 }, (_, i) => {
    const n = number(i + 1);
    return {
      id: `event-${n}`,
      title: `Event Reel ${n}`,
      category: "Event Videography",
      description:
        "Event coverage through framing, movement and visual storytelling.",
      role: "Videography — Divya Chheda",
      src: `/portfolio/videos/events/event-${n}.mp4`,
      poster: `/portfolio/posters/event-${n}.jpg`,
      orientation: "portrait" as const,
    };
  }),

  ...Array.from({ length: 4 }, (_, i) => {
    const n = number(i + 1);
    return {
      id: `commercial-${n}`,
      title: `Creative Production ${n}`,
      category: "Commercial Videography",
      description:
        "Creative visual content featuring products, people or brands.",
      role: "Videography — Divya Chheda",
      src: `/portfolio/videos/commercial/commercial-${n}.mp4`,
      poster: `/portfolio/posters/commercial-${n}.jpg`,
      orientation: (i === 3 ? "landscape" : "portrait") as
        | "portrait"
        | "landscape",
    };
  }),
];

export const portfolioPhotos: PortfolioPhoto[] = [
  ...Array.from({ length: 11 }, (_, i) => {
    const n = number(i + 1);
    return {
      id: `event-photo-${n}`,
      title: `Event Photography ${n}`,
      category: "Event Photography",
      collection: "events" as const,
      src: `/portfolio/photos/events/event-${n}.jpg`,
      alt: `Event photography image ${n} by Divya Chheda`,
      credit: "Photography — Divya Chheda",
    };
  }),

  ...Array.from({ length: 22 }, (_, i) => {
    const n = number(i + 1);
    return {
      id: `commercial-photo-${n}`,
      title: `Commercial Photography ${n}`,
      category: "Products, Food, Models & Beauty",
      collection: "commercial" as const,
      src: `/portfolio/photos/commercial/commercial-${n}.jpg`,
      alt: `Commercial and creative photography image ${n} by Divya Chheda`,
      credit: "Photography — Divya Chheda",
    };
  }),
];
