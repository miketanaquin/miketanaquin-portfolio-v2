"use client";

import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id='about' className='w-full h-auto  bg-zinc-900'>
            <div className="container overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0.0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.7,
                        ease: "easeInOut",
                    }} className="relative flex flex-col py-28 md:flex-row">
                    <div className="my-3 md:w-1/3 md:flex md:flex-col md:justify-center">
                        <h1 className='text-3xl lg:text-5xl font-medium z-10'>About</h1>
                    </div>
                    <div className="w-auto h-fit flex flex-col gap-3 md:w-2/3  md:gap-5">
                        <div className="flex flex-col gap-3 md:flex-row z-10">
                            <div className='md:w-1/3 md:flex md:flex-col md:justify-center'>
                                <h1 className='text-slate-50 text-xl font-medium font-sans'>Background</h1>
                            </div>
                            <div className="flex flex-col gap-1 p-3 text-wrap md:w-2/3 border-b-2 border-gray-700">
                                <h1 className='text-slate-50 tracking-tight leading-relaxed'>University of the East, Manila</h1>
                                <span className=' text-slate-400'>Bachelor's Degree in Electronics and Communications Engineering</span>
                                <span className=' text-slate-400'>June 2015 - December 2020</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-wrap md:flex-row z-10">
                            <div className='md:w-1/3 md:flex md:flex-col md:justify-center'>
                                <h1 className='text-slate-50 text-xl font-medium font-sans'>Work Experience</h1>
                            </div>
                            <div className='flex flex-col gap-3 md:w-2/3 md:flex md:flex-row border-b-2 border-gray-700 py-3'>
                                <div className="flex flex-col gap-1 px-3">
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>CCK City Network, Inc.</h1>
                                    <span className=' text-slate-400'>Software Engineer</span>
                                    <span className=' text-slate-400'>August 2023 - Present</span>
                                </div>
                                <div className="flex flex-col gap-1 px-3">
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>Converge ICT Solutions</h1>
                                    <span className=' text-slate-400'>Plant Records Engineer</span>
                                    <span className=' text-slate-400'>March 2022 - May 2023</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-wrap md:flex-row md:justify-between z-10">
                            <div className='md:w-1/3 md:flex md:flex-col md:justify-center'>
                                <h1 className='text-slate-50 text-xl font-medium font-sans md:w-1/3'>Contacts</h1>
                            </div>
                            <div className="flex flex-col gap-3 px-3 md:w-2/3 border-b-2 border-gray-700 py-3">
                                <a href="https://www.linkedin.com/in/mike-louie-tanaquin-003227217/" target="_blank"
                                    rel="noopener noreferrer" className="flex flex-row gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>Mike Louie Tañaquin</h1>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanaquinmike@gmail.com" target="_blank"
                                    rel="noopener noreferrer" className="flex flex-row gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z" /><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z" /></svg>
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>tanaquinmike@gmail.com</h1>
                                </a>
                                <a href="https://github.com/miketanaquin" target="_blank"
                                    rel="noopener noreferrer" className="flex flex-row gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 128 128"><g fill='#FFFFFF'><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" /></g></svg>
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>Mike Tañaquin</h1>
                                </a>
                                <a href="tel:+639061395059" className="flex flex-row gap-1" target="_blank"
                                    rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 50 50" fill='#FFFFFF'>
                                        <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 18.048828 11.035156 C 16.003504 10.946776 14.45113 11.723922 13.474609 12.658203 C 12.986349 13.125343 12.633832 13.625179 12.392578 14.091797 C 12.151324 14.558415 11.998047 14.943108 11.998047 15.443359 C 11.998047 15.398799 11.987059 15.632684 11.980469 15.904297 C 11.973869 16.17591 11.97507 16.542045 12 16.984375 C 12.04996 17.869036 12.199897 19.065677 12.597656 20.484375 C 13.393174 23.321771 15.184446 27.043821 19.070312 30.929688 C 22.95618 34.815554 26.678014 36.606575 29.515625 37.402344 C 30.93443 37.800228 32.130881 37.949937 33.015625 38 C 33.457997 38.02503 33.822105 38.026091 34.09375 38.019531 C 34.365395 38.012931 34.601049 38.001953 34.556641 38.001953 C 35.056892 38.001953 35.441585 37.848676 35.908203 37.607422 C 36.374821 37.366168 36.874657 37.013651 37.341797 36.525391 C 38.276078 35.54887 39.053222 33.996496 38.964844 31.951172 C 38.922907 30.975693 38.381316 30.111858 37.582031 29.599609 C 36.96435 29.203814 36.005458 28.589415 34.753906 27.789062 C 33.301811 26.861299 31.44451 26.795029 29.929688 27.625 L 30.015625 27.582031 L 28.837891 28.087891 L 28.751953 28.148438 C 28.465693 28.349428 28.111154 28.386664 27.789062 28.251953 C 26.886813 27.874649 25.480985 27.133329 24.173828 25.826172 C 22.866671 24.519015 22.125351 23.113186 21.748047 22.210938 C 21.613336 21.888845 21.650568 21.534307 21.851562 21.248047 L 21.912109 21.162109 L 22.417969 19.984375 L 22.375 20.070312 C 23.204764 18.555868 23.140248 16.698619 22.210938 15.246094 C 21.410584 13.994542 20.796186 13.03565 20.400391 12.417969 C 19.888142 11.618684 19.02431 11.077096 18.048828 11.035156 z M 17.962891 13.033203 C 18.243409 13.045263 18.533045 13.209378 18.716797 13.496094 C 19.113001 14.114413 19.727696 15.07377 20.527344 16.324219 C 21.058033 17.153694 21.09533 18.243821 20.621094 19.109375 L 20.597656 19.152344 L 20.115234 20.279297 L 20.214844 20.097656 C 19.623835 20.939396 19.505055 22.032514 19.902344 22.982422 C 20.35304 24.060173 21.214923 25.695392 22.759766 27.240234 C 24.304608 28.785077 25.939827 29.64696 27.017578 30.097656 C 27.967486 30.494945 29.060604 30.376165 29.902344 29.785156 L 29.720703 29.884766 L 30.847656 29.402344 L 30.890625 29.378906 C 31.755801 28.904877 32.845877 28.944375 33.675781 29.474609 L 33.675781 29.472656 C 34.92623 30.272304 35.885587 30.886999 36.503906 31.283203 C 36.790622 31.466955 36.954736 31.756591 36.966797 32.037109 C 37.032417 33.555785 36.504954 34.506599 35.896484 35.142578 C 35.59225 35.460568 35.262335 35.691348 34.990234 35.832031 C 34.718133 35.972715 34.457889 36.001953 34.556641 36.001953 C 34.373232 36.001953 34.276633 36.013981 34.046875 36.019531 C 33.817117 36.025131 33.509144 36.025436 33.128906 36.003906 C 32.368431 35.960876 31.318757 35.831053 30.054688 35.476562 C 27.526547 34.767581 24.137509 33.168759 20.484375 29.515625 C 16.831241 25.862491 15.232169 22.473167 14.523438 19.945312 C 14.169071 18.681386 14.039037 17.631464 13.996094 16.871094 C 13.974624 16.490908 13.974899 16.18286 13.980469 15.953125 C 13.986069 15.72339 13.998047 15.626918 13.998047 15.443359 C 13.998047 15.542109 14.027287 15.281867 14.167969 15.009766 C 14.308652 14.737665 14.539432 14.40775 14.857422 14.103516 C 15.493401 13.495046 16.444215 12.967581 17.962891 13.033203 z"></path>
                                    </svg>
                                    <h1 className='text-slate-50 tracking-tight leading-relaxed'>+639061395059</h1>
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About