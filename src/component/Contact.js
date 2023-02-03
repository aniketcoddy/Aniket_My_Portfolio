import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const myStyle = {
    backgroundImage: "url(/Projects.png)",
   
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
        className=" h-fit mt-[-124px] lg:mt-[-25px] "
        style={myStyle}>
        <div>
          <div
            className="flex flex-row gap-[15px]  sm:ml-[150px] md:ml-[211px] lg:ml-[327px] xl:ml-[54px]  "
            id="contacts"
          >
            <h1 className="font-[Poppins] mt-[57px] ml-[51px] text-[47px] xl:mt-[57px] xl:text-[60px] text-[#EEEEEE] font-bold">
              Contact
            </h1>
            <h1 className="font-[Poppins] mt-[57px] xl:text-[60px] text-[47px]  xl:mt-[57px] text-[#00ADB5] font-bold">
              Me
            </h1>
          </div>
        </div>
        <div >
          <form ref={form} onSubmit={sendEmail}>
            <div className=" w-[549px] h-[300px]  gap-[20px] sm:gap-[15px] xl:ml-[734px] xl:mt-[85px] pb-[706px] sm:pb-[574px] sm:mt-[30px] sm:ml-[27px] mt-[30px] ml-[39px] md:ml-[104px] lg:ml-[236px] flex flex-col">
              <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[15px]">
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
                  className="flex flex-row items-start sm:pt-[24px] pt-[5px] pr-[256px] pb-[222px] pl-[30px] sm:w-[590px] gap-[10px] text-[#EEEEEE] w-[286px]  h-[227px] bg-[rgba(57,62,70,0.5)] rounded-[16px] self-stretch"
                />
              </div>

              <div>
                <input type="submit" value="send" className=" w-[107px] text-[#EEEEEE] font-medium font-[Poppins] shadow-[0px 4px 4px] drop-shadow-[rgba(0 0 0 0.5)] text-[18px] h-[42px] flex flex-col items-center pt-[8px] bg-[#00ADB5] rounded-[24px] pr-[31px]  gap-[10px] hover:bg-[#3b7477] cursor-pointer "
                />
                  <img
                    src="send.png"
                    className="mt-[-33px] ml-[63px]"
                  />
               
                <div className="flex flex-col  gap-[20px]  mt-[34px] ">
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
            <img
              src="Group 2372.png"
              className=" w-[221px] ml-[89px] pb-[35px] sm:w-[268px] sm:ml-[205px] sm:pb-[52px] md:ml-[265px] lg:ml-[420px] xl:pb-[145px] xl:w-[315px]  xl:mt-[-569px] xl:ml-[200px] "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
