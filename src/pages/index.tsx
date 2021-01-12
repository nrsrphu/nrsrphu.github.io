import * as React from "react"

import 'cirrus-ui';

import AppContainer from '../components/AppContainer';
import Hero from "../components/Hero";
import Header from "../components/Header";


export default function Home() {
  return (
    <AppContainer title="Kezdőlap">
      <Header />
      <Hero image="/banner.jpg" />
    </AppContainer>
  );
}
