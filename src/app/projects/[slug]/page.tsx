import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
            </div>

            <div className="relative h-[400px] sm:h-[600px] w-full mb-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Proje Hakkında
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Özellikler
                </h2>
                <ul className="list-disc list-inside space-y-2 text-xl text-gray-600 dark:text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Kullanılan Teknolojiler
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <div>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors text-xl"
                  >
                    <FaGithub className="w-6 h-6 mr-2" />
                    GitHub&apos;da Görüntüle
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
