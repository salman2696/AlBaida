import React from 'react'
import chaimanImage from '../assets/images/AboutUs/chairman.jpg'

const ChairmanMsg = () => {
  return (
    <section className="bg-white relative">
        <div className="absolute right-0 hidden w-3/4 min-h-screen bg-gray-100 lg:block rounded-xl"></div>
    <div className="relative flex max-w-7xl mx-auto">
        <div className="min-h-screen lg:w-1/3"></div>
        

        <div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={chaimanImage } alt="chairman image"/>

                <div className="mt-8 lg:px-10 lg:mt-0">
                    <h1 className="text-4xl font-semibold text-gray-800 lg:w-72">
                        Message Form Chairman
                    </h1>

                    <p className=" mt-6 text-gray-500 ">
                        “It has been more than 3 decades, and it amazes me to see Al Baida Group unsettlingly strive to uphold a niche on top of the competitive business market. Having been a market leader covering various sectors in Qatar, we have always perpetuated in class and style. We cover almost all the key business sectors of various genres with top-notch quality services. We intend to expand our operations in various other core sectors as well. As much as we are focused in our vision to become an Intern ational business hub, we have always been fascinated to become your trusted partner. With us, you can taste the savour of an incredible partnership and global perspective. We have envisioned ourselves to be a unique entity with the best metrics as sustainable practices, efficiency and impeccable quality. Also, we never compromise on our social, economic and environmental responsibilities. On the whole, it gives me immense pleasure to be a part of this legacy group of companies that contributes monumental strategies to make Qatar an international hub for business and trade by 2022. ”
                    </p>

                    <h3 className="mt-6 text-lg font-medium text-custom-red">Ali Bin Abdullatif Almesned</h3>
                    <p className="text-gray-600 ">Chairman at Al Baida Group</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ChairmanMsg
