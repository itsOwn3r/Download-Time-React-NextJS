import Head from "next/head";
import Container from "@/Container/Container";
import Form from "@/Container/Form/Form";
import { useEffect } from "react";

export default function Home() {

  const sunRiseEffect = () => {
    for (let deg = 0; deg < 391; deg += 10) {
      setTimeout(function () {
        document.querySelector("body").style = `background:linear-gradient(${deg}deg, rgb(28 151 177) 0%, rgb(9 9 52) 54%, rgb(0 0 12) 100%)`;
      }, 1500 * (deg/10));
      if (deg == 360) {
         break;
       }
    }
  }
  const checkLocalStorage = () => {
    if (localStorage.getItem("data")) {
      let lsData = JSON.parse(localStorage.getItem("data"));
      document.querySelector(".remember-btn").style ="background-color:darkgreen";
      document.querySelector("#speed").value = lsData.speed;
      document.querySelector("#speedSelect").value = lsData["unit"];
  
      document.querySelector("#remember").title = "Forget?";
    }
  }
  useEffect(() => {
    checkLocalStorage();
    if (document.readyState === "complete") {
      sunRiseEffect();
    } else {
      window.addEventListener("load", sunRiseEffect);
      return () => document.removeEventListener("load", sunRiseEffect);
    }
  }, []);


  return (
    <>
      <Head>
        <title>Download Time</title>
        <meta name="description" content="Check how long does it take to download a file..."
        />
        <link rel="icon" href="https://own3r.me/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="full-width">
      <Container>
      <h1 className="header"><a href="https://own3r.me" target="_blank"> Download&apos;s Time App</a></h1>
            <p>How to Use it?</p>
            <p>Just fill the inputs and hit the Button! Lets Go!</p>
            <p>Please Use *Byte Per Second!</p>
        </Container>
        <div id="result"></div>
        <Container className="minHeight">
            <Form />
        </Container>


    </div>
    </>
  );
}
