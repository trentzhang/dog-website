"use client";
import { dogData } from "@/public/data";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function DogCard({ item }: { item: (typeof dogData)[0] }) {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          isBlurred
          isZoomed
          shadow="sm"
          radius="lg"
          //   width="100%"
          alt={item.name}
          className="w-full sm:object-cover  sm:h-[240px]"
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">${item.price}</p>
      </CardFooter>
    </Card>
  );
}

function DogCardExpanded({ item }: { item: (typeof dogData)[0] }) {
  //  Expanded DogCard with item.name, item.price, item.image, item.description
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          isBlurred
          isZoomed
          shadow="sm"
          radius="lg"
          //   width="100%"
          alt={item.name}
          className="w-full sm:object-cover  sm:h-[240px]"
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">${item.price}</p>
      </CardFooter>
    </Card>
  );
}
export default function DogCards() {
  return (
    <div className="gap-2 flex flex-wrap ">
      {dogData.map((item, index) => (
        <DogCard item={item} key={index} />
      ))}
      <DogCardExpanded item={dogData[0]} />
    </div>
  );
}
