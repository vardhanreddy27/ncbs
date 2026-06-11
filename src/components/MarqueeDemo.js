import React from 'react';
import Image from 'next/image';
import Marquee from "./Marquee";
import { cn } from "../utils/cn"; // Importing the `cn` function

const reviews = [
  {
    name: "Socratic Thinking",
    username: "SEED",
    body: "Students are encouraged to ask why, reason clearly, and discover knowledge.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Experiential Learning",
    username: "SEED",
    body: "Hands-on learning connects classroom concepts with the real world.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Excellence",
    username: "SEED",
    body: "Every child is guided to achieve personal best with confidence and pride.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Discipline",
    username: "SEED",
    body: "Responsibility, focus, values, and resilience are built into daily life.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "AI Smart Classes",
    username: "Feature",
    body: "AI-powered learning methods support clear, visual, interactive lessons.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Hostel Care",
    username: "Feature",
    body: "Separate residential facilities for boys and girls include personal care.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4 m-3 border-gray-950/[.1] bg-white",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium text-slate-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-cyan-500 py-10">
      <h1 className="pb-5 text-4xl font-bold">The Vaksiddhi Promise</h1>
      <Marquee className="justify-center">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="justify-center">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
