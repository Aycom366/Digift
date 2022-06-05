import { useState } from "react";
import Card from "./Card";
import { ArrivalCategories, ArrivalData } from "./data";

function flatten(arrivalData: typeof ArrivalData) {
  let flattenedArrivalData: any = [];
  arrivalData.forEach((arrival) => {
    flattenedArrivalData = [...flattenedArrivalData, ...arrival.products];
  });
  return flattenedArrivalData.length;
}

const Arrivals = () => {
  const [data, setData] = useState(ArrivalData);
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="max-w-[1400px] mx-auto flex flex-col  px-4 gap-12 justify-start py-[50px]">
      <h2 className="text-[2rem] font-bold text-[#000429]   ">
        Latest Arrivals
      </h2>
      <section className="w-full relative grid grid-cols-[auto_minmax(0,1fr)] gap-4">
        <div className="w-full">
          <div
            className={`flex sticky top-8 flex-col p-8 bg-[#F5F7FA] w-full gap-10 rounded-xl ${
              flatten(data) > 8 ? "h-auto" : "h-full"
            }`}
          >
            <header className="flex justify-between items-center w-full">
              <h3 className="font-semibold text[#000429] ">Filters</h3>
              <button className="font-semibold text-[#0069E0] bg-transparent outline-none text-[14px]">
                Reset
              </button>
            </header>
            <div className="flex flex-col gap-8">
              <h3 className="font-semibold text[#000429] ">Categories</h3>
              <ul className="flex flex-col gap-8">
                {ArrivalCategories.map((category) => (
                  <li className="flex gap-2 items-center">
                    <input
                      className="w-5 h-5 rounded bg-transparent border-[#DCDEE5] text-[#1676F3]"
                      type="checkbox"
                      id={category.name}
                      name={category.name}
                      value={category.value}
                    />
                    <label
                      className="text-[14px] text-[#8A91A8] font-semibold"
                      htmlFor={category.name}
                    >
                      {category.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full grid gap-4 grid-cols-3">
          {data.map((product) => (
            <div
              key={Math.random()}
              className="flex flex-col rounded-xl bg-[#F5F7FA] p-4 gap-4"
            >
              {product.products.map((product) => (
                <Card key={Math.random()} {...product} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Arrivals;
