import React from "react";
import Image from "next/image";

const ThumbnailContainer = ({ list, type }: { list: any[]; type: string }) => {
  return (
    <div className="border-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((item) => (
          <div key={item.id} className="relative group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <Image
                src={
                  item.thumbnail
                    ? item.thumbnail
                    : item.avatar
                    ? item.avatar
                    : item.picture
                }
                alt={"thumbnail pic"}
                height={40}
                width={50}
                className="group-hover:opacity-75 transition duration-300"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-300">
              <span className="text-white font-semibold">asdasd</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailContainer;
