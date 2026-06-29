"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projelerim
        </h1>
        <div className="max-w-3xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.slug}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="w-full text-left p-6 mb-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
