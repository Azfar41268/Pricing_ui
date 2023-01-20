'use client';

import Header from "./header"
import Pricing from "./price";
import { Features } from "./features";

export default function home() {
  return(
    <>
      <Header/>
      <Pricing/>
      <Features/>
    </>
  )
}