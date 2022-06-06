import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Card from "./Card";
import { ArrivalCategories, ArrivalData } from "./data";

interface IFilteredData {
  products: {
    category: string;
    productName: string;
    productPrice: number;
    productImage: string;
    productDescription: string;
  }[];
}

function groupDataIntoThreeColumns(arr: typeof ArrivalData) {
  const noOfContainedArray = Math.ceil(arr.length / 3);
  const result = [];
  let obj: any = {
    products: [],
  };
  for (let i = 0; i < arr.length; i += noOfContainedArray) {
    const firstNoOfContainedArray = arr.slice(i, i + noOfContainedArray);
    obj.products = firstNoOfContainedArray;
    result.push(obj);
  }
  return result;
}

const Arrivals = () => {
  const [data, setData] = useState<IFilteredData[]>(
    groupDataIntoThreeColumns(ArrivalData)
  );
  const [showAll, setShowAll] = useState(false);
  const [checkBoxSelections, setcheckBoxSelection] = useState<string[]>([]);

  useEffect(() => {
    if (!showAll) {
      const middleArray = Math.ceil(ArrivalData.length / 2);
      setData(groupDataIntoThreeColumns(ArrivalData.slice(0, middleArray)));
    } else {
      setData(groupDataIntoThreeColumns(ArrivalData));
    }
  }, [showAll]);

  function flatten(arrivalData: typeof data) {
    let flattenedArrivalData: any = [];
    arrivalData.forEach((arrival) => {
      flattenedArrivalData = [...flattenedArrivalData, ...arrival.products];
    });
    return flattenedArrivalData.length;
  }

  const handleChecked = (value: string) => {
    let selections = [...checkBoxSelections];
    let find = selections.indexOf(value);
    if (find > -1) {
      selections.splice(find, 1);
    } else {
      selections.push(value);
    }
    setcheckBoxSelection(selections);
  };

  const ResetCheckbox = () => {
    setcheckBoxSelection([]);
  };

  return (
    <section className="max-w-[1400px] mx-auto flex flex-col  px-4 gap-12 justify-start py-[50px]">
      <h2 className="text-[2rem] font-bold text-[#000429] dark:text-slate-100">
        Latest Arrivals
      </h2>
      <section className="w-full relative flex flex-col sm:grid sm:grid-cols-[auto_minmax(0,1fr)] gap-4">
        <div className="w-full h-full">
          <div
            className={`flex relative sm:sticky sm:top-8 flex-col p-8 bg-[#F5F7FA] dark:bg-slate-700 w-full gap-10 rounded-xl ${
              flatten(data) > 8 ? "h-auto" : "h-full"
            }`}
          >
            <header className="flex justify-between items-center w-full">
              <h3 className="font-semibold text[#000429] ">Filters</h3>
              <button
                onClick={ResetCheckbox}
                className="font-semibold text-[#0069E0] dark:text-blue-400 bg-transparent outline-none text-[14px]"
              >
                Reset
              </button>
            </header>
            <div className="flex flex-col gap-8">
              <h3 className="font-semibold text[#000429] ">Categories</h3>
              <ul className="flex flex-col gap-8">
                {ArrivalCategories.map((category) => (
                  <li key={category.id} className="flex gap-2 items-center">
                    <input
                      className="w-5 h-5 rounded bg-transparent border-[#DCDEE5] text-[#1676F3]"
                      type="checkbox"
                      id={category.name}
                      name={category.name}
                      value={category.value}
                      checked={checkBoxSelections.includes(category.value)}
                      onChange={() => handleChecked(category.value.toString())}
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
        <div className="w-full flex gap-4 flex-wrap">
          {data.map((product) => (
            <div
              key={Math.random()}
              className="flex-[1_0_20em] flex flex-col rounded-xl bg-[#F5F7FA] dark:bg-slate-700 p-4 gap-4"
            >
              {product.products.map((product) => (
                <Card key={Math.random()} {...product} />
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="col-span-4 flex items-center justify-center gap-2 text-[#8A91A8] font-semibold text-[14px] leading-[20px]"
        >
          {showAll ? "Load less products" : "Load more products"}{" "}
          <BiRightArrowAlt />
        </button>
      </section>
    </section>
  );
};

export default Arrivals;
