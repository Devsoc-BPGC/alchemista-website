import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import alc from "./alc.jpeg";
import kavya from "./assets/kavya.jpg";
import deep from "./assets/deep.jpg";
import advik from "./assets/advik.jpg";
import ak from "./assets/ak.jpg";
import drona from "./assets/drona.jpg";
import parth from "./assets/parth.jpg";

function App() {
  const arr = [
    {
      img: kavya,
      name: "Kavya MD",
      linkedin: "https://in.linkedin.com/in/kavya-md-b46732267",
      designation: "President",
    },
    {
      img: deep,
      name: "Deepanshi Srivastava",
      linkedin: "https://in.linkedin.com/in/deepanshi-srivastava-795597275",
      designation: "Head of Event Management",
    },
    {
      img: parth,
      name: "Parth Nair",
      linkedin: "https://in.linkedin.com/in/parthmnair",
      designation: "Head of Funding & Outreach",
    },
    {
      img: advik,
      name: "Advik Deshpande",
      linkedin: "https://in.linkedin.com/in/advik-deshpande-9b7b5b245",
      designation: "Head of Paper Publishing",
    },
    {
      img: ak,
      name: "AK Chhatrapati",
      linkedin: "https://in.linkedin.com/in/chhatrapati-a-k-b39876258",
      designation: "Head of Technical Committee",
    },
    {
      img: drona,
      name: "Drona Agarwal",
      linkedin: "https://in.linkedin.com/in/drona-agrawal-b92178260",
      designation: "Head of Advertising",
    },
  ];
  return (
    <>
      <div className="bg-[#3B1A55] z-10 min-h-[100vh] h-full text-white justify-center ">
        <img src={alc} className="flex justify-center mx-auto"></img>
        <a
          href="https://unstop.com/o/MiOIHyZ?lb=HsMnNZCi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="bg-white text-lg flex justify-center self-center mx-auto my-auto  mb-8"
          >
            Register
          </Button>
        </a>
        <div className="font-mono text-4xl flex mb-[-24px]  justify-center">
          COORDINATING TEAM
        </div>
        <div className="flex flex-row flex-wrap pb-12 justify-evenly">
          {arr.map((arr, index) => (
            <>
              <div key={index}>
                <a
                  href={arr.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="lg:h-96 lg:w-96 h-80 w-80 mt-10 mb-14 cursor-pointer">
                    <div className="font-mono text-xl text-white">
                      {arr.name}
                    </div>
                    <CardContent className="flex items-center justify-center">
                      <img
                        src={arr.img}
                        alt={`Image ${index}`}
                        className="aspect-square border border-slate-300 p-2 rounded-lg object-contain"
                      />
                    </CardContent>
                    <div className="font-mono text-lg text-white">
                      {arr.designation}
                    </div>
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
