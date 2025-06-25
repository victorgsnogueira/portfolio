import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HoverButton } from "@/components/ui/HoverButton";

const projects = [
  {
    title: "projeto 1",
    techs: ["Tecnologia", "Tecnologia"],
    description:
      "Descrição 1.",
    link: "#",
  },
  {
    title: "projeto 2",
    techs: ["Tecnologia", "Tecnologia", "Tecnologia"],
    description:
      "Descrição 2.",
    link: "#",
  },
  {
    title: "Projeto 3",
    techs: ["Tecnologia", "Tecnologia"],
    description: "Descrição 3.",
    link: "#",
  },
];

export default function App() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="bg-[#121212] text-white min-h-screen p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-start">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/profile.jpg" alt="@victor" />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Victor Nogueira</h1>
              <p className="text-muted-foreground text-sm">
                Desenvolvedor Web
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mt-6 mb-6">
            Desenvolvedor Web com foco real em resultado. Há quase um ano no mercado, combino programação
            e criatividade para criar soluções funcionais, bonitas e bem estruturadas. Levo a sério boas 
            práticas, performance e experiência do usuário. Se você tem uma ideia, eu tenho o que ela 
            precisa pra se tornar real. Vamos fazer acontecer.
          </p>

          <div className="flex gap-3 flex-wrap">
            <HoverButton
              href="mailto:vgdsno@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              text="Email"
            />
            <HoverButton
              href="https://linkedin.com/in/victor-nogueira-a50697172"
              icon={<Linkedin className="w-5 h-5" />}
              text="LinkedIn"
            />
            <HoverButton
              href="https://github.com/victorgsnogueira"
              icon={<Github className="w-5 h-5" />}
              text="Github"
            />
            <HoverButton
              href="https://wa.me/5512981647076"
              icon={<Phone className="w-5 h-5" />}
              text="Whatsapp"
            />
            <HoverButton
              href="/curriculo.pdf"
              icon={<FileText className="w-5 h-5" />}
              text="Currículo"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 py-4"
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div
                      className=" bg-[#121212] p-6 rounded-md border border-zinc-700 shadow-lg h-full"
                    >
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {project.techs.join(" · ")}
                      </p>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.description}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
