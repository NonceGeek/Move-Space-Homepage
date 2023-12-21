import { useState } from "react";
import GradientText from "@/components/GradientText";
import GradientLine from "@/components/GradientLine";
import did from "@/assets/images/did.png";
import platform from "@/assets/images/platform.png";
import move_space_db from "@/assets/images/move_space_db.png";
import gpt_sandbox from "@/assets/images/gpt_sandbox.png";
import zk_movedid from "@/assets/images/zk_movedid.png";

import git from "@/assets/images/git.png";
import twitter from "@/assets/images/twitter.png";
import aptos from "@/assets/images/aptos.png";
import movebit from "@/assets/images/movebit.png";
import townesquare from "@/assets/images/townesquare.png";
import greenfield from "@/assets/images/greenfield.png";
import chainbase from "@/assets/images/chainbase.png";
export default function HomePage() {
  const [partnersRect, setPartnersRect] = useState([
    {
      name: "BNB Greenfield",
      imgSrc: greenfield,
      link: "https://greenfield.bnbchain.org/"
    },
    {
      name: "Chainbase",
      imgSrc: chainbase,
      link: "https://chainbase.com/"
    },
  ]);
  const [partnersRound, setPartners] = useState([
    {
      name: "Aptos",
      imgSrc: aptos,
      link: "https://aptos.dev/",
    },
    {
      name: "Townesquare",
      imgSrc: townesquare,
      link: "https://www.townesquare.xyz/",
    },
    {
      name: "Movebit",
      imgSrc: movebit,
      link: "https://movebit.xyz/",
    }
  ]);
  const [contact, setContact] = useState([
    {
      name: "git",
      imgSrc: git,
      link: "https://github.com/NonceGeek",
      // TODO: update to new
    },
    {
      name: "twitter",
      imgSrc: twitter,
      link: "https://twitter.com/movespacexyz",
    },
  ]);
  return (
    <div className="container">
      <main>
        <div className="lg:w-[1100px] m-auto">
          <div className="font-Inter-Bold text-[40px] text-center lg:mt-[100px] lg:mb-[60px] my-[20px]">
            MoveSpace
          </div>
          <div className="font-Inter-Regular text-[20px] text-center">
            <div>
              AI-powered Datahouse for on-chain data labeling & data marketplace.
            </div>
            <div className="lg:my-[30px] my-[10px]">
              Powered by BNB Greenfield
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center">
          <div className="font-Inter-Bold text-[36px] w-full text-center mt-[100px] mb-[60px]">
            Partners & Integrations
          </div>
          <div className="font-Inter-Regular text-[20px] w-full grow flex justify-evenly items-center">
            {partnersRect.map((item, index) => {
              return (
                <a href={item.link} key={index} target={"_blank"}>
                  <img src={item.imgSrc} alt={item.name} className="w-[140px]" />
                </a>
              );
            })}
          </div>
          <div className="mt-16 font-Inter-Regular text-[20px] w-full grow flex justify-around items-center">
            {partnersRound.map((item, index) => {
              return (
                <a href={item.link} key={index} target={"_blank"}>
                  <img src={item.imgSrc} alt={item.name} className="w-[50px]" />
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="flex mt-[80px] lg:flex-row flex-col items-center pb-10">
        <div>
          <img src={did} className="w-[105px]" alt="" />
        </div>
        <div className="flex-grow text-center font-Inter-Bold text-[16px] lg:my-0 my-5">
          If you have any questions, please contact us at <br></br>
          <a href="mailto:lee.aohua@movespace.xyz" className=" underline">
            lee.aohua@movespace.xyz
          </a>
        </div>
        <div className="flex items-baseline lg:w-[200px] w-[40%] lg:justify-start justify-between">
          {contact.map((item, index) => {
            return (
              <a
                href={item.link}
                key={index}
                className="mr-[20px]"
                target={"_blank"}
              >
                <img src={item.imgSrc} alt={item.name} className="w-[20px]" />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
