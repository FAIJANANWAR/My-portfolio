import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioService } from "@/lib/services/portfolioService";
import { ArrowLeft, ExternalLink, Cpu, CheckCircle2, Layers } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await portfolioService.getProjects();
  const project = projects.find((p) => p.slug === slug && p.status === "published");

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = "https://faijan.in";
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} | Technical Dossier`,
    description: project.overview || `Technical engineering dossier for ${project.title} by Faijan Anwar.`,
    openGraph: {
      title: `${project.title} — Faijan Anwar`,
      description: project.overview,
      url: projectUrl,
      type: "article",
      siteName: "Faijan Anwar — Full-Stack Developer",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Technical Dossier`,
      description: project.overview,
      creator: "@faijananwar",
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export async function generateStaticParams() {
  const projects = await portfolioService.getProjects();
  return projects
    .filter((p) => p.status === "published")
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = await portfolioService.getProjects();
  const project = projects.find((p) => p.slug === slug && p.status === "published");

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D1217] pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D96B43] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Project Lab</span>
          </Link>
        </div>

        {/* Dossier Card Container */}
        <article className="p-6 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#E8DFC8] shadow-md space-y-8">
          {/* Header */}
          <div className="border-b border-[#E8DFC8] pb-6">
            <span className="text-xs font-bold text-[#D96B43] uppercase tracking-widest block mb-2">
              Technical Dossier Station • {project.category}
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#4A1D24] leading-tight">
              {project.title}
            </h1>
            {project.overview && (
              <p className="text-sm sm:text-base text-[#2D1217]/80 mt-4 leading-relaxed font-sans">
                {project.overview}
              </p>
            )}
          </div>

          {/* Problem & Solution Breakdown */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="p-6 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8DFC8]">
                  <h2 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#D96B43]" />
                    Problem Statement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-6 rounded-2xl bg-[#F5EFE6]/60 border border-[#E8DFC8]">
                  <h2 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    Engineering Solution
                  </h2>
                  <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* System Architecture */}
          {project.architecture && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#3B5998]" />
                System Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#2D1217]/80 leading-relaxed p-5 rounded-2xl bg-[#F5EFE6]/40 border border-[#E8DFC8]">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Core Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-[#4A1D24] uppercase tracking-wider">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2D1217]/80">
                    <span className="w-2 h-2 rounded-full bg-[#D96B43]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links & Tags */}
          <div className="pt-6 border-t border-[#E8DFC8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags && project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold text-[#4A1D24] bg-[#F5EFE6] px-3.5 py-1 rounded-xl border border-[#E8DFC8]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#F5EFE6] hover:bg-[#E8DFC8] border border-[#E8DFC8] text-[#2D1217] text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#D96B43] hover:bg-[#C55A32] text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
