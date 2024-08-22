import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="dark:text-purple text-violet-950">
          {" "}
          satisfied clients
        </span>
      </h1>
      <div className="flex flex-col items-center lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10">
          {companies.map(({ id, img, name, nameImg }, idx) => (
            <div key={id + idx} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
