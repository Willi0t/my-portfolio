import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic1 trans.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-datk w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="my profile picture"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl"
              />
              <p className="my-4 text-base font-medium">
                Hi, I'm william, a frontend developer with a passion for
                creating beautiful and responsive web experiences. I specialize
                in JavaScript, React, and NextJS, and I'm constantly learning
                new skills to improve my craft. As a dedicated student, I'm
                eager to apply my knowledge to real-world projects and
                collaborate with like-minded individuals to create amazing
                digital products
              </p>
              <div className=" w-80 flex justify-between items-center self-start mt-2">
                <Link
                  href="/dummy.pdf" //"Resume-light.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg front-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:william.sinclair92@gmaik.com"
                  target={"_blank"}
                  className="ml-4 font-medium capitalize text-dark underline border-2 border-solid border-transparent hover:border-dark rounded-lg text-lg front-semibold p-2.5 px-6"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
      </main>
    </>
  );
}
