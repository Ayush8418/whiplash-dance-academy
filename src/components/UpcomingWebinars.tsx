import { HoverEffect } from "./ui/card-hover-effect";
import upcomingWebinarsData from '../data/upcomingWebinarsData.json'

function UpcomingWebinars() {
  const projects = upcomingWebinarsData.upcomingWebinarsList;
  return (
    <div className="w-full bg-zinc-950">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-center text-[3rem] font-bold">Upcomming Webinars</h1>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default UpcomingWebinars;
