import ImageCarouesl from "@/app/components/Carousel/ImageCarouesl";
import React from "react";
import SnippetImg from "../../../../public/snippetImg.png";
import RealTimeCodeEditorImg from "../../../../public/realTimeCodeEditor.png";
import ServerImg from "../../../../public/serverImg.png";
import DsaImg from "../../../../public/Untitled design.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const slides = [
    {
      img: SnippetImg,
      text: "Platform where you can create and share code snippets with anyone",
    },
    {
      img: RealTimeCodeEditorImg,
      text: "Platform where you can create and share code snippets with anyone",
    },
    {
      img: ServerImg,
      text: "Platform where you can create and share code snippets with anyone",
    },
    {
      img: DsaImg,
      text: "Platform where you can create and share code snippets with anyone",
    },
  ];
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[45%]">{children}</div>
      <div className="h-full w-[55%]">
        <ImageCarouesl
          showArrows={false}
          className="w-full h-screen"
          slides={slides}
          showDots={true}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
