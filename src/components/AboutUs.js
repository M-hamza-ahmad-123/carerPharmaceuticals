import React from 'react'

function AboutUs() {
  return (
    <div class="sm:flex items-center max-w-screen-xl sm:ml-40 ">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?w=1380&t=st=1698521320~exp=1698521920~hmac=550da01924810eb3a7d8f6fc50c44de757af9d691a08bba7a29bdb2d121cc94f"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-green-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-green-600">Carer Pharmaceuticals</span>
            </h2>
            <p class="text-gray-700">
            As a leading name in the industry, we're dedicated to creating a healthier world through innovation, research, and quality. Our story is one of unwavering commitment to safety, sustainability, and customer satisfaction. Get to know us better, and discover the people and principles that drive our mission of delivering top-quality pharmaceutical solutions.
            </p>
        </div>
    </div>
</div>
  )
}

export default AboutUs