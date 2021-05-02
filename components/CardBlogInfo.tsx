import Image from "next/image";
export const CardBlogInfo: React.FC = () => (
  <div className="flex space-x-5 items-center">
    <Image
      className="rounded-full"
      src="/avatar.PNG"
      alt="avatar"
      height={100}
      width={100}
    />
    <section className="flex flex-col mb-4 space-y-4">
      <h2 className="font-semibold font-spacemono text-lg">
        Blog por Jesus Cova
      </h2>
    </section>
  </div>
);
