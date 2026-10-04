"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ResumeSection() {
  return (
    <section id="resume" className="border-t border-slate-100 dark:border-slate-800/60 py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="09 — Resume" title="The one-page version" />
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy/60 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-accent-sky">
                <FileText size={20} />
              </div>
              <div>
                <p className="font-display text-base font-medium text-navy dark:text-white">
                  Jeet_Dave_Resume.pdf
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Updated for Data Engineering / Data Science roles
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 dark:border-slate-600 px-5 py-2.5 text-sm font-medium text-navy dark:text-white transition-colors hover:border-primary-500 hover:text-primary-500 dark:hover:border-accent-sky dark:hover:text-accent-sky inline-flex items-center gap-2"
              >
                <ExternalLink size={14} />
                Preview
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                <Download size={14} />
                Download
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
