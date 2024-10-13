import Image from "next/image";

export default function How() {
    return (
        <section className="pt-[50px]" id="how">
            <div className="container mx-auto px-5 md:px-24 z-10">
                <div className="flex pt-[250px] lg:mt-0 text-primary-custom_primary flex-col">
                    <div className="relative">
                        <center>
                            <h1 className="lg:text-[55px] text-2xl font-bold z-10 md:mb-10">
                                HOW IT WORKS
                            </h1>
                            <div
                                className="w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[-40px] left-[300px] sm:left-[100px] z-[-1]"
                            ></div>
                        </center>
                    </div>
                </div>

                {/* Section 1 */}
                <div className="flex md:justify-center justify-center md:h-[400px] lg:mt-0 flex-col lg:flex-row">
                    <div className="flex flex-1 justify-center order-1 lg:order-1">
                        <div className="lg:flex lg:justify-start lg:items-center text-primary-custom_primary lg:text-start pt-[50px] ml-0 md:ml-10">
                            <div className="overflow-hidden w-[300px] lg:w-[400px] md:rounded-[100px] rounded-[50px]">
                                <div className="flex pt-[50px]">
                                    <Image
                                        src="/assets/images/amicoheho.png"
                                        sizes="100vw"
                                        width={0}
                                        height={0}
                                        className="w-full h-auto"
                                        alt="amicohehe"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-color-custom_accent lg:text-left pt-[50px] ml-0 flex-1 text-center order-2 lg:order-2">
                        <div className="text-center lg:text-left lg:ml-10 gap-2 md:mt-20 mt-10 flex-col xl:flex-row text-[#1E0342]">
                            <h2 className="font-bold lg:text-[30px]">
                                AI detects your mental condition.
                            </h2>
                            <p className="z-10 text-lg">
                                AI detects your mental state to recommend the best therapist for your situation.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="w-[30px] sm:w-[20px] h-[30px] sm:h-[20px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[450px] sm:top-[400px] left-[-550px] sm:left-[-300px] z-[-10]"
                        ></div>
                    </div>
                </div>
                <div className="absolute">
                    <div
                        className="w-[35px] sm:w-[25px] h-[35px] sm:h-[25px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[100px] left-[600px] sm:left-[300px] z-[-10]"
                    ></div>
                </div>
                {/* Arrow */}
                <div className="flex md:justify-center justify-center pt-[100px] pb-[100px]">
                    <Image
                        src="/assets/icons/arrow 2.png"
                        sizes="100vw"
                        width={20}
                        height={20}
                        className="transform translate-y-[80px]"
                        alt="arrow"
                    />
                </div>

                {/* Section 2 */}
                <div className="container mx-auto px-5 md:px-24 z-10">
                    <div className="flex md:justify-center justify-center md:h-[400px] lg:mt-[50px] flex-col lg:flex-row">
                        <div className="text-color-custom_accent lg:text-left pt-[50px] ml-0 flex-1 text-center order-2 lg:order-1">
                            <div className="text-center lg:text-left lg:ml-10 gap-2 md:mt-20 mt-10 flex-col xl:flex-row text-[#1E0342]">
                                <h2 className="font-bold lg:text-[30px]">
                                    Get matched to the best therapist for you
                                </h2>
                                <p className="z-10 text-lg">
                                    Answer a few questions to find a credentialed therapist who fits your needs and preferences. Tap into the largest network of credentialed providers.
                                </p>
                            </div>
                        </div>
                        <div className="absolute">
                            <div
                                className="w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[50px] sm:top-[30px] left-[700px] sm:left-[400px] z-[-10]"
                            ></div>
                        </div>
                        <div className="flex flex-1 justify-center order-1 lg:order-2">
                            <div className="lg:flex lg:justify-start lg:items-center text-primary-custom_primary lg:text-start pt-[50px] ml-0 md:ml-10">
                                <div className="overflow-hidden w-[300px] lg:w-[400px]">
                                    <div className="flex pt-[50px]">
                                        <Image
                                            src="/assets/images/Group 66.png"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            className="w-full h-auto"
                                            alt="group66"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute">
                            <div
                                className="w-[40px] sm:w-[30px] h-[40px] sm:h-[30px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[500px] sm:top-[450px] left-[50px] sm:left-[30px] z-[-10]"
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex md:justify-center justify-center pt-[100px] pb-[100px] sm:pt-[50px] sm:pb-[50px]">
                    <Image
                        src="/assets/icons/arrow 2.png"
                        sizes="100vw"
                        width={20}
                        height={20}
                        className="transform translate-y-[80px]"
                        alt="arrow"
                    />
                </div>

                {/* Section 3 */}
                <div className="container mx-auto px-5 md:px-24 z-10">
                    <div className="flex md:justify-center justify-center md:h-[400px] lg:mt-[50px] flex-col lg:flex-row">
                        <div className="flex flex-1 justify-center order-1 lg:order-1">
                            <div className="lg:flex lg:justify-start lg:items-center text-primary-custom_primary lg:text-start pt-[50px] ml-0 md:ml-10">
                                <div className="overflow-hidden w-[300px] lg:w-[400px]">
                                    <div className="flex pt-[50px]">
                                        <Image
                                            src="/assets/images/rafiki.png"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            className="w-full h-auto"
                                            alt="rafiki"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-color-custom_accent lg:text-left pt-[50px] ml-0 flex-1 text-center order-2 lg:order-2">
                            <div className="text-center lg:text-left lg:ml-10 gap-2 md:mt-20 mt-10 flex-col xl:flex-row text-[#1E0342]">
                                <h2 className="font-bold lg:text-[30px]">
                                    You schedule an appointment with a psychologist.
                                </h2>
                                <p className="z-10 text-lg">
                                    Schedule a consultation with a psychologist that fits your needs to support your mental health.
                                </p>
                            </div>  
                        </div>
                        <div className="absolute">
                            <div
                                className="w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[50px] sm:top-[30px] left-[100px] sm:left-[60px] z-[-10]"
                            ></div>
                        </div>
                        <div className="absolute">
                            <div
                                className="w-[30px] sm:w-[20px] h-[30px] sm:h-[20px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[490px] sm:top-[450px] left-[-450px] sm:left-[-300px] z-[-10]"
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex md:justify-center justify-center pt-[100px] pb-[100px] sm:pt-[50px] sm:pb-[50px]">
                    <Image
                        src="/assets/icons/arrow 2.png"
                        sizes="100vw"
                        width={20}
                        height={20}
                        className="transform translate-y-[80px]"
                        alt="arrow"
                    />
                </div>

                {/* Section 4 */}
                <div className="container mx-auto px-5 md:px-24 z-10">
                    <div className="flex md:justify-center justify-center md:h-[400px] lg:mt-[50px] flex-col lg:flex-row">
                        <div className="text-color-custom_accent lg:text-left pt-[50px] ml-0 flex-1 text-center order-2 lg:order-1">
                            <div className="text-center lg:text-left lg:ml-10 gap-2 md:mt-20 mt-10 flex-col xl:flex-row text-[#1E0342]">
                                <h2 className="font-bold lg:text-[30px]">
                                    Therapy when you need it
                                </h2>
                                <p className="z-10 text-lg">
                                    You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center order-1 lg:order-2">
                            <div className="lg:flex lg:justify-start lg:items-center text-primary-custom_primary lg:text-start pt-[50px] ml-0 md:ml-10">
                                <div className="overflow-hidden w-[300px] lg:w-[400px]">
                                    <div className="flex pt-[50px]">
                                        <Image
                                            src="/assets/images/pana.png"
                                            sizes="100vw"
                                            width={0}
                                            height={0}
                                            className="w-full h-auto"
                                            alt="pana"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute">
                            <div
                                className="w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[50px] sm:top-[30px] left-[500px] sm:left-[300px] z-[-10]"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
