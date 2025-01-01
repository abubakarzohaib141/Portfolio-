"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Browser Agent",
    description: "An AI-powered browser chatbot built with LangChain LangGraph Gemini_api_key and Python.",
    image: "/browsing.png",
    link : "https://python.org"
  },
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform with Stripe integration.",
    image: "/commerce.png",
    link : "https://abz-commerce.vercel.app"
  },
  {
    title: "RAG System",
    description: "RAG System using LangChain Python Streamlit",
    image: "/chatbot.png",
    link : "https://abubakar-rag.streamlit.app"
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={project.link} target="_blank">
                <Button variant={"outline"}>
                See Now
               </Button>
               </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
