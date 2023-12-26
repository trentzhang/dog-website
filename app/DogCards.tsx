"use client";
import { dogData } from "@/public/data";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NextImage from "next/image";
function DogCard({ item }: { item: (typeof dogData)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div layout transition={{ duration: 0.1 }}>
      <Card
        shadow="sm"
        isPressable
        onPress={() => {
          console.log("item pressed");
          setIsExpanded(!isExpanded);
        }}
      >
        <CardBody className="overflow-visible p-0  flex-row gap-3 ">
          <motion.div>
            <Image
              isBlurred
              isZoomed
              shadow="sm"
              radius="lg"
              //   width="100%"
              alt={item.name}
              className="w-[240px] object-cover h-[240px]"
              src={item.image}
            />
          </motion.div>
          {/* <AnimatePresence mode="wait"> */}
          {isExpanded ? (
            <motion.div
              className="p-6 max-w-sm"
              layoutId={String(item.name)}
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   exit={{ opacity: 0 }}
            >
              <div className="flex gap-6 py-3">
                <b>{item.name}</b>
                <p className="text-default-500">${item.price}</p>
              </div>
              <p>{item.description}</p>
            </motion.div>
          ) : null}
          {/* </AnimatePresence> */}
        </CardBody>
        {isExpanded ? null : (
          <motion.div className="w-full" layoutId={String(item.name)}>
            <CardFooter className="text-small justify-between">
              <b>{item.name}</b>
              <p className="text-default-500">${item.price}</p>
            </CardFooter>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

function DogCardExpanded({ item }: { item: (typeof dogData)[0] }) {
  //  Expanded DogCard with item.name, item.price, item.image, item.description
  return (
    <Card
      className="w-full"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0 flex-row gap-3 ">
        <div className="">
          <Image
            isBlurred
            isZoomed
            shadow="sm"
            radius="lg"
            // className="object-fit"
            height={100}
            alt={item.name}
            src={item.image}
          />
        </div>
        <div className="flex-col ">
          <div className="flex gap-6">
            <b>{item.name}</b>
            <p className="text-default-500">${item.price}</p>
          </div>
          {/* <p>{item.description}</p> */}
        </div>
      </CardBody>
      {/* <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">${item.price}</p>
      </CardFooter> */}
    </Card>
  );
}
export default function DogCards() {
  return (
    <motion.div layout className="gap-2 flex flex-wrap ">
      {dogData.map((item, index) => (
        <DogCard item={item} key={index} />
      ))}
      <DogCardExpanded item={dogData[0]} />
    </motion.div>
  );
}
