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
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData} from "@/data";
import { Link } from "react-router-dom";
//import {tre_em1} from "../public/img/tre_em1.jpg";

export function Home() {
  return (
    // INTRODUC
    <> 
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('./public/img/introduce1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Welcome to our social protection center !
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a homepage of our website. Including about introduction, events information, donation and more information. 
              </Typography>
              <Link to="/donate">
              <Button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" Link="/donate">DONATION NOW</Button>
              </Link>
              {/* <Link to ="/donate">hh</Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* KẾT THÚC INTRODUCE */}

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
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
            {/* div - event */}
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <PageTitle heading="ABOUT"></PageTitle>
              {/* <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                ABOUT
              </Typography> */}
              <Typography className="mb-8 font-normal text-blue-gray-500 align=center">
                {/* chung toi la trung tam bao tro */}
                {/* <br /> */}
                {/* <br /> */}
                Trung tâm Bảo trợ xã hội Thanh Hóa tiền thân là trại Cứu tế Đông Thành được thành lập ngày 26/02/1964 trực thuộc Ban Tổ chức dân chính tỉnh Thanh Hóa theo Quyết định số 367-TCDC/UBTH ngày 26/02/1964 của UBHC tỉnh Thanh Hoá. Sau đó, do nhu cầu của công tác trợ giúp xã hội trên địa bàn tỉnh Trung tâm đã nhiều lần đổi tên gọi thành Trung tâm Bảo trợ xã hội Thanh Hóa được sử dụng từ năm 1987 đến nay.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            {/* ket thuc div event */}
            {/* mo dau div hinh anh */}
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/tre_em1.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    align="center"
                    className="mb-3 font-bold "
                  >
                    Social Protection Center
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  </Typography>
                </CardBody>
              </Card>
            </div>
            {/* ket thuc div hinh anh  */}
          </div>
        </div>
      </section>
      {/* KET THUC THE SECTION */}
      {/* MO DAU DIV EVENT */}
      <section className="px-4 pt-20 pb-30">
        <div className="container mx-auto">
          <PageTitle heading="EVENTS">
          </PageTitle>

        <div className="w-full bg-white py-4 px-2">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[400px] mx-auto my-4" src="/img/tre_em1.jpg" alt="/"></img>
            <div className="">
                <p className="text-[#331D2C] font-bold text-uppercase">Our Signature Events</p>
                <div>                   
                  <h1 className="">Ngày 19/07/2023</h1><br></br>
                  </div>  
                              
                  <p>The Child Protection Center (CPC) has two major signature events annually — Cook for Courage in May and Holidays in Crestwood in November/December.
                  As a national accredited child advocacy center, we support Child Abuse Prevention Month in April.
                  In addition, we recognize a variety of events related to child abuse and child witnesses of violence, including National Domestic Violence Month in October....</p>
                  <br></br>
                  <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Read more</button>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[400px] mx-auto my-4" src="/img/tre_em1.jpg" alt="/"></img>
            <div className="">
                <p className="text-[#331D2C] font-bold text-uppercase">Our Signature Events</p>
                <div>                   
                  <h1 className="">Ngày 19/07/2023</h1><br></br>
                  </div>  
                              
                  <p>The Child Protection Center (CPC) has two major signature events annually — Cook for Courage in May and Holidays in Crestwood in November/December.
                  As a national accredited child advocacy center, we support Child Abuse Prevention Month in April.
                  In addition, we recognize a variety of events related to child abuse and child witnesses of violence, including National Domestic Violence Month in October....</p>
                  <br></br>
                  <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Read more</button>
            </div>
          </div>
        </div>

          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, title, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                title={title}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-lg fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div> */}
        </div>
      </section>
      {/* MO DAU DIV .. */}
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto" >
          <PageTitle heading="SERVICES">
            
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          <PageTitle heading="CONTACT">
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
