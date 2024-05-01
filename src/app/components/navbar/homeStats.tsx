import React from "react";

type Props = {};

function HomeStats({}: Props) {
  return (
    <section className="my-14 py-6 px-[50px]">
      <div className="md:flex justify-around space-y-10 md:space-y-0">
        <div>
          <h1 className="text-center text-secondary">Completed Projects</h1>
          <h1 className="text-center">+30</h1>
        </div>
        <div>
          <h1 className="text-center text-secondary">Awards Received</h1>
          <h1 className="text-center">3</h1>
        </div>
        <div>
          <h1 className="text-center text-secondary">Client Satisfaction</h1>
          <h1 className="text-center">+95%</h1>
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
