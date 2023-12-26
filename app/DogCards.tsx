"use client";
import { body, dogData, email, subject } from "@/public/data";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import NextImage from "next/image";
import { ScrollShadow } from "@nextui-org/react";
function DogCard({ item }: { item: (typeof dogData)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  //   useEffect(() => {
  //     if (isHovered) {
  //       setIsExpanded(true);
  //     } else {
  //       setIsExpanded(false);
  //     }
  //   }, [isHovered]);

  return (
    <motion.div
      layout
      transition={{ duration: 0.1 }}
      onHoverStart={() => {
        if (isFixed) return;
        // setIsExpanded(true);
        // setIsHovered(true);
      }}
      onHoverEnd={() => {
        if (isFixed) return;
        // setIsExpanded(false);
        // if (!isClicked && isHovered) {
        //   // delay setting isExpanded to false so that the user can click on the card
        // setTimeout(() => {
        //   setIsExpanded(false);
        // }, 300);
      }}
    >
      <Card
        shadow="sm"
        isPressable
        onPress={() => {
          console.log("item pressed");
          setIsExpanded(!isExpanded);
          //   setIsClicked(!isClicked);
          //   setIsFixed(!isFixed);
        }}
      >
        <CardBody className="overflow-visible p-0  flex-col md:flex-row gap-3 items-center md:items-start">
          <motion.div>
            <Image
              isBlurred
              isZoomed
              shadow="lg"
              radius="lg"
              //   width="100%"
              alt={item.name}
              className={
                "w-[240px] object-cover " +
                (isExpanded ? "h-[284px]" : "h-[240px]")
              }
              src={item.image}
            />
          </motion.div>
          {/* <AnimatePresence mode="wait"> */}
          {isExpanded ? (
            <ScrollShadow className="h-[284px] p-6 max-w-sm gap-4 flex flex-col">
              <div className="flex gap-6 ">
                <b>{item.name}</b>
                <p className="text-default-500">${item.price}</p>
              </div>
              <p>{item.description}</p>
              <a
                href={`mailto:${email}?subject=${subject}&body=${
                  body +
                  "%0D%0A" +
                  item.name +
                  " $" +
                  item.price +
                  "%0D%0A" +
                  item.description
                }`}
                className="text-primary-500"
              >
                <Button color="primary" variant="ghost">
                  Email Us
                </Button>
              </a>
            </ScrollShadow>
          ) : null}
          {/* </AnimatePresence> */}
        </CardBody>
        {isExpanded ? null : (
          <motion.div className="w-full">
            <CardFooter className="text-small justify-between items-center">
              <b>{item.name}</b>
              <p className="text-default-500 ">${item.price}</p>
            </CardFooter>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

export default function DogCards() {
  return (
    <motion.div
      layout
      className="gap-2 flex flex-wrap justify-center"
      id="dogs"
    >
      {dogData.map((item, index) => (
        <DogCard item={item} key={index} />
      ))}
    </motion.div>
  );
}
