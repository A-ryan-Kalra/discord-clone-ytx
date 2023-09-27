import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Employee } from "../../Types";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { useRecoilState } from "recoil";
import {
  screenState,
  setParam,
  setParam1,
  setParamsUrl,
} from "../../atoms/modalAtoms";
import Link from "next/link";
import { error } from "console";

function ChannelNameSection({
  channel,
  id,
  channelNameState,
  urlParams12,
}: {
  channel: Employee;
  id: String;
  channelNameState: Employee;
  urlParams12: string;
}) {
  const [channelState, setChannelState] = useState(false);
  const [url, setUrl] = useRecoilState<string>(setParamsUrl || "");

  const [secondParam, setSecondParam] = useState<string>("");
  const [urlParams, setUrlParams] = useRecoilState<string>(setParam);

  const [id1, setId1] = useState<string>("");

  const [channelNameState1, setChannelNameState1] = useState<Employee>([]);

  useEffect(() => {
    setChannelState(channel.uid === urlParams12);
  });

  useEffect(() => {
    setSecondParam(urlParams12);

    setChannelNameState1(channelNameState);
  }, []);
  const [screen, setScreen] = useRecoilState<boolean>(screenState);

  //   console.log(channelState);
  return (
    <Link
      href={`/channels/${urlParams}/${channel?.uid}`}
      className={`flex justify-between hover:rounded-md ease-out   transform transition-all  hover:bg-[#494c53] ${
        channelState ? "bg-[#404348] rounded-md" : ""
      } px-2 py-[2px] items-center cursor-pointer group`}
      onClick={() => {
        setScreen(false);
      }}
    >
      <span className="flex items-center space-x-1">
        <Icon
          icon="akar-icons:hashtag"
          className={` ${channelState ? "text-white" : "text-[#949BA4]"}`}
          width={20}
        />
        <h2 className={` ${channelState ? "text-white" : "text-[#949BA4]"}`}>
          {channel?.channelName}
        </h2>
      </span>
      <span className="flex items-center  text-[#80828F] space-x-1 mr-[2px]  ">
        <Icon
          className={`${
            channelState
              ? "hover:text-white inline-block"
              : "  group-hover:inline-block hidden hover:text-white "
          }  `}
          icon="material-symbols:person-add-rounded"
          width={17}
        />
        <Icon
          icon="icon-park-solid:setting"
          className={`${
            channelState
              ? "hover:text-white inline-block"
              : "  group-hover:inline-block hidden hover:text-white "
          }  `}
          width={13}
        />
      </span>
    </Link>
  );
}

export default ChannelNameSection;
