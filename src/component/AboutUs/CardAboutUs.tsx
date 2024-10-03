const CardAboutUs = ({
  img,
  title,
  p,
  btn,
}: {
  img: string;
  title: string;
  p: string;
  btn?: string;
}) => {
  return (
    <div className="px-4 py-5 rounded-lg shadow-lg bg-white">
      <div className="flex items-center gap-4">
        <img src={img} alt={title} className="w-[6rem]" />
        <div>
          <h3 className="text-[#242331] text-3xl font-bold mb-3 ">{title}</h3>
          <p className="text-sm text-textLight md:text-xl ">{p}</p>
        </div>
      </div>
      {btn && (
        <div className="flex-center mt-5">
          <button className="px-5 py-2 rounded-md text-white bg-red font-bold">
            {btn}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardAboutUs;
