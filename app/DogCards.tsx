"use client";
import { body, dogData, email, subject } from "@/public/data";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import NextImage from "next/image";
import { ScrollShadow } from "@nextui-org/react";
function DogCard({ item }: { item: (typeof dogData)[0] }) {
  return (
    <motion.div>
      <Card shadow="sm">
        <CardBody className="overflow-visible p-0  flex-col md:flex-row gap-3 items-center md:items-start">
          <motion.div className="pt-8 md:pt-0">
            <Image
              isBlurred
              isZoomed
              shadow="lg"
              radius="lg"
              //   width="100%"
              alt={item.name}
              className={"w-[240px] object-cover h-[284px]"}
              src={item.image}
            />
          </motion.div>
          {/* <AnimatePresence mode="wait"> */}

          <ScrollShadow className="h-[284px] p-6 max-w-sm gap-4 flex flex-col">
            <div className="flex gap-6 ">
              <b>{item.name}</b>
              <p className="text-default-500">${item.price}</p>
            </div>
            <p>{item.description}</p>

            <Button className="bg-pink-100/50">
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
                className="text-pink-800"
              >
                Email Us
              </a>
            </Button>
          </ScrollShadow>

          {/* </AnimatePresence> */}
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default function DogCards() {
  return (
    <section className="my-8">
      <motion.div
        layout
        className="gap-2 grid grid-cols-1 xl:grid-cols-2"
        id="dogs"
      >
        {dogData.map((item, index) => (
          <DogCard item={item} key={index} />
        ))}
      </motion.div>
    </section>
  );
}
