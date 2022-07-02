import { Heart, Share } from "phosphor-react";

const Bible = () => {
  return (
    <section className="bg-blue-700  shadow-md h-[76px] xs:h-full xs:py-2">
      <div className="w-full h-full flex items-center justify-center">
        <form className="w-full flex items-center justify-around xs:flex-col xs:gap-4">
          <select
            className="w-[60px] rounded cursor-pointer"
            name="version"
            id="version"
          >
            <option className="cursor-pointer" value="nvi">
              NVI
            </option>
          </select>
          <select
            className="w-[120px] rounded cursor-pointer"
            name="book"
            id="book"
          >
            <option className="cursor-pointer" value="gn">
              Gênesis
            </option>
          </select>
          <select
            className="w-[60px] rounded cursor-pointer"
            name="chapter"
            id="chapter"
          >
            <option className="cursor-pointer" value="1">
              1
            </option>
          </select>
        </form>
      </div>

      <div className="mt-6 bg-white shadow-md border-t border-b border-t-blue-300 border-b-blue-300 lg:border lg:border-blue-300">
        <div>
          <div className="my-6">
            <h1 className="text-3xl font-bold font-quick">Gênesis 1</h1>
          </div>
          <div className="w-full flex flex-col gap-6 p-1">
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                <sup className="mx-1">1</sup>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
            <div className="rounded shadow-sm">
              <p className="text-md font-semibold font-quick leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatum repudiandae nostrum voluptatem impedit nam
              </p>
              <div className="w-full flex gap-2 items-center justify-end px-2">
                <Heart size={24} />
                <Share size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bible;
