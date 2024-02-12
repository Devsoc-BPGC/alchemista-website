import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
  const arr = [
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "one",
      linkedin: "https://www.google.com/",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "two",
      linkedin: "https://www.google.com/",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "three",
      linkedin: "https://www.google.com/",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "four",
      linkedin: "https://www.google.com/",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "five",
    },
  ];
  return (
    <>
      <div className="bg-[#3c096c] z-10 min-h-[100vh] h-full text-white justify-center ">
        <div className="text-6xl pt-2 border-b-[1px] font-serif flex self-center justify-center">
          Alchemista
        </div>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="bg-white text-lg flex justify-center self-center mx-auto my-auto mt-8 mb-8"
          >
            Register
          </Button>
        </a>
        <div className="font-mono text-4xl flex mb-[-24px]  justify-center">
          COORDINATING TEAM
        </div>
        <div className="flex flex-row flex-wrap justify-evenly">
          {arr.map((arr, index) => (
            <>
              <div key={index}>
                <a
                  href={arr.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="lg:h-96 lg:w-96 h-80 w-80 mt-10 mb-10 cursor-pointer">
                    <div className="font-mono text-xl text-white">
                      {arr.name}
                    </div>
                    <CardContent className="flex items-center justify-center">
                      <img
                        src={arr.img}
                        alt={`Image ${index}`}
                        className="aspect-square border border-slate-300 p-2 rounded-lg object-cover"
                      />
                    </CardContent>
                  </Card>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
