const Card = ({ order, onDelete }: { order: number; onDelete: () => void }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <section className="mt-10 relative">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold">CARD {order + 1}</h2>
        {order !== 0 && (
          <button className="font-semibold text-red-500" onClick={handleDelete}>
            DEL
          </button>
        )}
      </header>
      <main className="border-2 border-gray-400 rounded-lg p-2 pt-6 my-2">
        <div className="relative flex items-center gap-4">
          <input
            type="text"
            className="min-w-[93%] md:text-[18px]  pb-1 border-b-2 border-gray-400 placeholder:font-semibold placeholder:text-base focus:outline-none"
            placeholder="TEXT (MAX 100Byte)"
          />
        </div>
        <div className="relative flex items-center gap-4 mt-5">
          <input
            type="text"
            className="min-w-[93%] md:text-[18px] pb-1 border-b-2 border-gray-400 placeholder:font-semibold placeholder:text-base focus:outline-none"
            placeholder="TEXT (MAX 100Byte)"
          />
        </div>
      </main>
    </section>
  );
};

export default Card;
