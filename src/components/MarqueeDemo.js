import React from 'react';
import Image from 'next/image';
import Marquee from "./Marquee";
import { cn } from "../utils/cn"; // Importing the `cn` function

const reviews = [
  {
    name: "Parent Voice",
    username: "@vaksiddhi",
    body: "A caring school environment where children are encouraged to dream, learn, and grow with discipline.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Student Growth",
    username: "@learning",
    body: "Students build confidence through classroom experiences, values, and future-ready learning.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Smart Learning",
    username: "@innovation",
    body: "AI-enabled classrooms help turn concepts into clear, engaging learning moments.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Leadership",
    username: "@values",
    body: "Discipline, responsibility, and communication are nurtured along with academics.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Holistic Growth",
    username: "@growth",
    body: "Learning goes beyond textbooks so every child can discover strengths and purpose.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Parent Partnership",
    username: "@parents",
    body: "Families feel connected to the child's journey from dream to learning and success.",
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
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[var(--brand-primary)] py-10">
      <h1 className="pb-5 text-4xl font-bold text-white">Vaksiddhi Voices</h1>
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
