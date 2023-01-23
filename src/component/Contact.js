import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
    height: "100vh",
    marginTop: "-70px",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
 
   

    emailjs.sendForm('service_anucc9h', 'template_78l2ilq', form.current, 'h0rUXr_2VL7LxGlBW')
      .then((result) => {
          console.log(result.text);
          console.log(
            "successfully send"
          )
      }, (error) => {
          console.log(error.text);
          console.log(
            "not send"
          )
      });
  };

  return (
    <div>
      <div
        className="top-[3135px] absolute w-[1535px] h-[500px] "
        style={myStyle}
      >
        <div>
          <div
            className="flex flex-row gap-[20px] top-[86px] left-[162px] absolute"
            id="contacts"
          >
            <h1 className="font-[Poppins] text-[60px] text-[#EEEEEE] font-bold">
              Contact
            </h1>
            <h1 className="font-[Poppins] text-[60px] text-[#00ADB5] font-bold">
              Me
            </h1>
          </div>
          <div>
            <img
              src="Group 2372.png"
              className="top-[305px] left-[255px] relative"
            />
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="top-[76px] left-[843px] absolute w-[549px] h-[300px]  gap-[20px] flex flex-col">
              <div className="flex flex-row gap-[20px]">
                <div className="gap-[10px] flex flex-col">
                  <h1 className="w-[102px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                    Your name
                  </h1>
                  <input
                    required
                    type="text"
                    name="to_name"
                    placeholder="Name"
                    className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                  />
                </div>
                <div className="gap-[10px] flex flex-col">
                  <h1 className="w-[101px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                    Your email
                  </h1>
                  <input
                    required
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="flex flex-row items-start pl-4 gap-[10px] text-[#EEEEEE] w-[288px] h-[59px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                  />
                </div>
              </div>

              <div className="gap-[10px] flex flex-col">
                <h1 className="w-[131px] h-[27px] font-[Poppins] font-normal text-[15px] leading-[27px] text-[#EEEEEE]">
                  Your Message
                </h1>
                <input
                  required
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="flex flex-row items-start pt-[5px] pr-[256px] pb-[222px] pl-[30px] gap-[10px] text-[#EEEEEE] w-[600px] h-[280px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                />
              </div>

              <div>
                <input type="submit" value="send" className="relative w-[107px] text-[#EEEEEE] font-medium font-[Poppins] shadow-[0px 4px 4px] drop-shadow-[rgba(0 0 0 0.5)] text-[18px] h-[42px] flex flex-col items-center pt-[8px] bg-[#00ADB5] rounded-[24px] pr-[31px] top-[8px] left-[4px]  gap-[10px] hover:bg-[#3b7477] cursor-pointer "
                />
                  <img
                    src="send.png"
                    className="top-[469px] left-[68px]  absolute"
                  />
               
                <div className="flex flex-col top-[530px] left-[10px] absolute gap-[20px]">
                  <div className="flex gap-[10px]">
                    <img src="telephone.png" />
                    <a className="text-[#EEEEEE]">(91)-7302918014</a>
                  </div>
                  <div className="flex gap-[10px]">
                    <img src="mail.png" />
                    <a href="/" className="text-[#EEEEEE]">
                      vishnoianiket903@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
