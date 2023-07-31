import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { serviceData, aboutHRData, contactData } from "@/data";
import sponsorData from "@/data/sponsor-data";
export function Service() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('http://imgs.baobacgiang.com.vn/2022/06/25/16/20220625165049-img-9172.JPG')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Overview of Service
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              The Social Protection Center provides the following services 
              to underprivileged children and provides educational equipment 
              in remote areas.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Section Donate Compaign */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <NewspaperIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Donate Campaign
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              The objective of the fundraising campaigns is to support 
              underprivileged children and improve their living conditions.
              </Typography>
              {/* Link to events page */}
              <Button variant="outlined">donate here</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/service_compaign.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Donate Compaign
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  The "Donate disabled children" campaign has been increasingly 
                  successful in school.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Section Support Children */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <NewspaperIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Support Children
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Supporting disadvantaged children in remote areas
                <br />

                Donate the cost of education and learning materials for disadvantaged children
              </Typography>
              <Button variant="outlined">donate here</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/service_supportChildren.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Support Children Compaign
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  The "Donate compaign old books" for disadvantaged children in remote areas.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Section Support Equipment School */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <NewspaperIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="red-gray"
              >
                Support School Equipment
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Campaign to support schools with serious lack of educational equipment in remote areas
                <br />
                <br />
                The campaign to support and donate equipment to build schools in highland and remote areas is commendable.
              </Typography>
              <Button variant="outlined">donate here</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/service_supportEquipment.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Support Equipment Compaign
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  The "Support Equipment for Education" campaign has been increasingly 
                  successful in attracting philanthropists and celebrities 
                  to participate and contribute.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}
export default Service;