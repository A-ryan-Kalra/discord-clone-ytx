import React, { useEffect, useState } from "react";
import { Employee } from "../../Types";
import { push } from "firebase/database";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { serverName, setParam, setParam1 } from "../../atoms/modalAtoms";
import Link from "next/link";
import Image from "next/image";

function NavbarServer({ post, id, urlParams }: Employee) {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [selectedServer, setSelectedServer] = useState<boolean>(false);
  const [serverNames, setServerNames] = useRecoilState<string>(serverName);
  // const [urlParams, setUrlParams] = useRecoilState<string>(setParam);
  const [urlParams1, setUrlParams1] = useRecoilState<string>(setParam1);

  const paramsId: string = urlParams;

  const router = useRouter();

  const [url, setUrl] = useState<string>("");
  const [id1, setId1] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
    setUrl(location[2]);
    setId1(id);
  });

  useEffect(() => {
    if (id1 === urlParams) {
      setTimeout(() => {
        setSelectedServer(true);
      }, 100);
    } else {
      setSelectedServer(false);
    }
  });

  let location: Employee = window.location.pathname.split("/");

  return (
    <Link href={`/channels/${post.uid}`}>
      {isClient && Object.keys(post).length !== 0 && (
        <div className=" w-full active:scale-y-90 cursor-pointer flex  mx-auto h-[50px] group">
          <div className="relative  h-full  w-1 flex  mr-2 ">
            <div
              className={`bg-white h-full duration-[100] transition-all transform ease-in origin-center scale-y-[16%] ${
                selectedServer
                  ? "scale-y-[80%] duration-[100] transition-all transform ease-in"
                  : "group-hover:scale-y-[40%]"
              } my-auto rounded-r-[100%] w-2`}
            ></div>
          </div>
          <Image
            src={
              post?.serverImage
                ? post?.serverImage
                : "/20-200938_discord-png.webp"
            }
            width={50}
            height={50}
            className="rounded-full  hover:rounded-2xl w-[50px] h-[50px] object-cover transition"
            alt=""
          />
        </div>
      )}
    </Link>
  );
}

export default NavbarServer;
