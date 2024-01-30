import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 gap-5">
        {[...Array(20)].map((_, i) => (
          <figure key={i} className="bg-gray-600 rounded-xl pb-[100%]"></figure>
        ))}
      </div>
    </div>
  );
}
