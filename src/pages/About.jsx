import React from 'react'
import school from '../assets/images/illustrations/school.png'
import person from '../assets/images/illustrations/person.png'
import devPic from '../assets/images/dev/hero-art.png'



const About = () => {
  return (
    <div className='px-16 pb-8 '>
       <h1 className='text-4xl text-(--textLight) text-center bg-(--bgLight) p-2 rounded-2xl   font-bold font-dm'>About</h1>
    <div className='mt-8 p-12 px-16 bg-(--sectionLight)  rounded-2xl relative font-inter'>
       <div className='flex  flex-col gap-16'>
       <div className='flex gap-16'>
            <div className='h-[300px] w-[300px] flex justify-center  rounded-2xl ' id="img">
                <img className='h-full object-cover grayscale hover:grayscale-0 transition duration-500' src={devPic} alt="" />
            </div>
            <div className='flex-1 text-(--textSec)' id="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis ut sequi error illum impedit accusantium rem veniam, soluta accusamus inventore fugiat asperiores quia illo ab vero eveniet eos, perspiciatis quibusdam distinctio aperiam architecto eligendi iure? Excepturi maiores, iusto, necessitatibus facilis similique eaque laudantium ullam mollitia magni porro quo aperiam, perferendis quod veritatis inventore et saepe rem tempore qui consequatur suscipit! Ipsum rem non, accusantium sed temporibus blanditiis consequatur ducimus velit quia ratione eius error ex eos veritatis rerum placeat dicta porro voluptatum quis corporis? Quis similique illo laboriosam fugit labore suscipit, iste sunt, vitae omnis tempore repellat earum eaque delectus? Voluptatum iste eveniet id quos voluptas! Officia voluptate vitae fugiat autem dolor nobis dolores exercitationem at? Dolor laboriosam quibusdam labore perferendis fuga ullam debitis corporis eaque modi! Doloribus consequatur voluptates eum at, odit neque sed nisi quod recusandae illo omnis ea voluptate et molestias laborum illum fugiat animi corporis ipsum consequuntur, harum natus quia accusantium. Molestiae minima enim laboriosam reprehenderit explicabo quis natus earum voluptatum atque quas eligendi nostrum sit vel accusantium amet pariatur, quos expedita tenetur iusto iste sapiente autem impedit at. Molestias quibusdam quo consequuntur, sapiente quas quod illo corporis assumenda deleniti recusandae fugiat rerum sed quisquam?
            </div>
         </div>
         <p className='text-(--textSec)'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro rem nihil labore quo ipsa aliquam, voluptatibus consequatur accusantium dicta? Atque commodi a ut voluptas corporis distinctio ullam ea tempore voluptates aliquam. Sapiente, repudiandae at. Doloribus officiis placeat quis sapiente. Labore eveniet, obcaecati quaerat veniam quo id, cumque qui, quidem eaque nobis voluptates deleniti dolore alias velit provident natus rem! Inventore necessitatibus perferendis aut quod excepturi atque laboriosam blanditiis saepe quas libero et optio ipsa tenetur autem assumenda corporis soluta, in dicta error reiciendis tempora repellendus. Voluptatem maiores earum maxime neque hic ex deserunt magni, labore, ratione minima odio. Quis voluptatem animi impedit quibusdam quae dolorem. Recusandae porro dolore, officiis molestiae quo impedit quos dolorum illum tempore libero ipsam, quasi non enim assumenda voluptate placeat accusamus dolorem velit eius? Sint, libero cum vel adipisci accusamus esse possimus minus minima at, non nam vitae excepturi similique blanditiis nulla saepe quasi sit.
         </p>
         {/* Education Section */}
            <div className={`flex flex-row-reverse  gap-44 justify-between items-center`}>
               <div className='w-[350px] h-[300px] object-cover overflow-hidden rounded-md ' id="image">
                   <img className='w-full h-full hover:grayscale-0 duration-500 transition grayscale-100' src={school} alt="" />
               </div>
               <div className='flex flex-col gap-4 w-1/2 ' id="text">
                   <h1 className='text-2xl text-(--textLight) font-dm font-bold'>Education</h1>
                   <p className='text-(--textLight) font-inter font-medium'>Attendant: BSCS at Virtual University of Pakistan</p>
                   <p className='text-(--textSec) font-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                   </p>
               </div>
             </div>
             {/* Hobbies and interest */}
              <div className={`flex  gap-44 justify-between items-center`}>
               <div className='w-[350px] h-[300px] object-cover overflow-hidden rounded-md ' id="image">
                   <img className='w-full h-full hover:grayscale-0 hover:rotate-y-180 transition grayscale-100' src={person} alt="" />
               </div>
               <div className='flex flex-col gap-4 w-1/2 ' id="text">
                   <h1 className='text-2xl text-(--textLight) font-dm font-bold'>Interests and Hobbies</h1>
                   <p className='text-(--textSec) font-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                   </p>
               </div>
             </div>
             {/* Contact and Socials */}
              <div className={`flex  flex-row-reverse justify-between `}>
                {/* Contact form */}
          <div
            id="contactForm"
            className="w-[350px] flex flex-col justify-between  p-4 rounded-2xl bg-(--bgLight)"
          >
            <div className="flex flex-col gap-8">
              <div id="heading">
                <h1 className="text-2xl text-(--textLight) font-bold font-dm">Let's talk!</h1>
                <p className="text-(--textSec) font-inter text-sm">
                  An advice/suggestion or just a friendly hi!
                </p>
              </div>
              <form className="flex flex-col  gap-4 items-center">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border outline-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="border outline-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
                <textarea
                  type="text"
                  placeholder="Your message"
                  className="border outline-none resize-none border-gray-400 placeholder-gray-400 p-3 w-full rounded-xl"
                />
              </form>
            <button className="bg-(--bgLight) border border-(--textLight) text-sm  gap-2 font-inter hover:text-(--textDark) hover:bg-(--bgDark)  p-2 px-6 w-fit self-center cursor-pointer text-(--textLight) transition rounded-full">
              Send
            </button>
            </div>
          </div>
               <div className='flex flex-col gap-4 w-1/2 ' id="text">
                   <h1 className='text-2xl text-(--textLight) font-dm font-bold'>Let's have a convo!</h1>
                   <p className='text-(--textSec) font-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                   </p>
                   {/* Social Icons */}
                      <div id="socials" className="flex flex-col gap-2">
                <div className="flex gap-4">
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="h-16 w-16 p-2 cursor-pointer text-(--textLight) text-3xl flex items-center justify-center rounded-xl border-3 border-(--textLight)">
                   <i class="fa-brands fa-facebook"></i>
                </div>

                </div>
              </div>
               </div>
             </div>
          </div>

       <div>

       </div>
    </div>
    </div>
  )
}

export default About
