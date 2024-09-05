import React from "react";

const Presentation = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-center gap-2">
      <div className="overflow-hidden object-cover aspect-auto">
        <img src={"/foto-profilo.jpg"} alt="profile" className="rounded-full" />
      </div>

      <p className="text-wrap text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem
        sunt modi voluptatem itaque omnis distinctio delectus harum reiciendis
        soluta dolores, expedita unde magnam consectetur, vel, vero iste debitis
        ut?
      </p>
    </div>
  );
};

export default Presentation;
