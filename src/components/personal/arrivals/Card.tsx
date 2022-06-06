import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

interface IProps {
  category: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productDescription: string;
}

const Card = ({
  category,
  productName,
  productPrice,
  productImage,
  productDescription,
}: IProps) => {
  return (
    <motion.article
      layout
      className="bg-white dark:bg-slate-700 rounded-lg flex flex-col gap-6 p-[19px_22px] border-2 dark:border-slate-500 "
    >
      <header className=" flex items-center justify-start ">
        <p className="text-[14px] bg-[#F5F5F5] dark:bg-slate-500  rounded-[999px]  font-semibold p-[8px_16px] text-[#6F6F80] dark:text-slate-200">
          {category}
        </p>
      </header>
      <article className="flex flex-col">
        <header className="flex items-center gap-[12px]">
          <div className="w-[32px] rounded overflow-hidden h-[32px]">
            <img
              loading="lazy"
              className="img"
              src={productImage}
              alt={productName}
            />
          </div>
          <p className="font-semibold text-[#000429]">{productName}</p>
        </header>
        <p className="leading-[20px] py-[18px] border-b border-[#F5F7FA]  text-[12px] text-[#8A91A8]">
          {productDescription}
        </p>
        <footer className="flex flex-col gap-6 w-full">
          <p className="text-[#8A91A8] flex items-center mt-4  text-[12px]">
            <span>
              <AiOutlineInfoCircle />
            </span>{" "}
            This card has a fee of $ {productPrice}
          </p>
          <button className="w-full group gap-4 rounded-[4px] text-white bg-[#0069E0] flex items-center justify-center py-3">
            Purchase card{" "}
            <MdOutlineKeyboardArrowRight className="mt-[1px] motion-safe:group-hover:animate-pulse" />
          </button>
        </footer>
      </article>
    </motion.article>
  );
};

export default Card;
