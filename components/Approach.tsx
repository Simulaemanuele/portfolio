import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Card from "./ui/Card";
import { AceternityIcon } from "./ui/Icon";
import { approach } from "@/data";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="dark:text-purple text-violet-950">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {approach?.map(
          (
            {
              id,
              title,
              order,
              des,
              animationSpeed,
              containerClassName,
              colors,
              dotSize,
            },
            idx
          ) => (
            <Card
              key={id + idx}
              title={title}
              icon={<AceternityIcon order={order} />}
              des={des}
            >
              <CanvasRevealEffect
                animationSpeed={animationSpeed}
                containerClassName={`${containerClassName} rounded-3xl overflow-hidden`}
                colors={colors}
                dotSize={dotSize}
              />
            </Card>
          )
        )}
        {/* <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card> */}
      </div>
    </section>
  );
};

export default Approach;
