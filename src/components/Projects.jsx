import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { project_content } = content.Projects; // Access project_content instead of Projects
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14">
      <h2 className="title" data-aos="fade-down">
          My Projects
        </h2>
        <h4 className="subtitle" data-aos="fade-down">My awesome works</h4>
      </div>
    
      <div className="flex max-w-6xl gap-6 px-2 py-10 mx-auto items-center relative">
        <div className="lg:w-2/2 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {project_content.map((project, i) => ( // Map over project_content
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4  rounded-xl" >
                  <img src={project.img} alt="" className="rounded-lg" />
                  <h4 className="text-xl my-4 ">{project.name}</h4>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600  px-2 py-1 inline-block "
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
