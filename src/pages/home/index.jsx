/*import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";*/
import Input from "../../components/Input";
import { Box, StyledHome, Rodape } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { VideoContext } from "../../providers/video";
import YoutubeVideo from "../../components/YoutubeVideo";

function Home() {
  const { video } = useContext(VideoContext);

  return (
    <StyledHome>
      <Header />
      <Box>
        <h1>Página HOME</h1>
      </Box>
      <YoutubeVideo />
      <Input />
      <Rodape>
        <span>
          <strong>P.O. - </strong>
          Rodolfo Jaques
        </span>
        <span>
          <strong>Scrum Master - </strong>
          Renan Martini
        </span>
        <span>
          <strong>Tech Leader - </strong>
          Susimara Roberti
        </span>
        <span>
          <strong>Dev - </strong>
          Abner Leal
        </span>
        <span>
          <strong>Dev - </strong>
          Alex Flavio
        </span>
        <span>
          <strong>Dev - </strong>
          Raquel Sá
        </span>
      </Rodape>
    </StyledHome>
  );
}

export default Home;
