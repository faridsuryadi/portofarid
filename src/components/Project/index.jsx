import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./starwars.css";

export const Project = () => {

  return (
    <>
      <Flex justifyContent={"center"} flexDir={"column"} bg={"black"} py={6} color={"yellow"}>
        <Text className="title">Episode i</Text>
        <Text className="subtitle">A New Hope</Text>
      </Flex>
      <div className="star-wars-container">
        <style>
          @import url('https://fonts.cdnfonts.com/css/star-wars');
        </style>
        <style>
          @import url('https://fonts.cdnfonts.com/css/trade-gothic-lt-std');
        </style>

        <div className="star-wars">
          <div className="crawl-container">
            <p>
            Greetings, inhabitants of the digital galaxy! I am Muhammad Farid Suryadi, known across the webiverse as Farid. Armed with a Bachelor's degree in Meteorology, I once navigated the cosmic currents of weather phenomena. But destiny had other plans, steering me towards the mesmerizing realms of web development. Imagine a journey where meteorological expertise merges with the Force of web technologies.
            </p>
            <p>
              In this saga, I, Farid, embark on a quest to create stellar user interfaces, solve coding conundrums, and weave seamless digital experiences. Join me on this intergalactic odyssey as we harness the power of code to craft extraordinary web landscapes. May the source code be with us as we venture into the vast cosmos of possibilities!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
