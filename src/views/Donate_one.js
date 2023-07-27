import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Donate_one() {
  return (
    <>
      <Navbar transparent />
      <div>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
        <div className="container mx-auto p-4">
        {/* <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
            >
            <Typography variant="h3" color="white">
                DONATE ONE
            </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
            <Input variant="standard" type="text" label="Name" size="lg" />
            <Input variant="standard" type="text" label="Phone Number" size="lg" />
            <Input variant="standard" type="text" label="Money Donate" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
                DONATE FOR US
            </Button>
            </CardFooter>
        </Card> */}
        </div>
        <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        {/* <SimpleFooter /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
