/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const MAX_W = 260;
const MAX_H = 320;

type PreviewData = {
  dataUrl: string;
  width: number;
  height: number;
};

export default function HackathonsSection() {
  const isPdf = (href: string) => href.toLowerCase().endsWith(".pdf");
  const isImage = (href: string) => /\.(png|jpe?g|gif|webp)$/i.test(href);

  const [previews, setPreviews] = useState<Record<string, PreviewData>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  type ImgDim = { width: number; height: number };
  const [imgDims, setImgDims] = useState<Record<string, ImgDim>>({});

  const handleImageLoad = useCallback(
    (href: string, e: React.SyntheticEvent<HTMLImageElement>) => {
      const { naturalWidth, naturalHeight } = e.currentTarget;
      if (naturalWidth && naturalHeight && !imgDims[href]) {
        const scale = Math.min(MAX_W / naturalWidth, MAX_H / naturalHeight, 1);
        setImgDims((prev) => ({
          ...prev,
          [href]: {
            width: Math.round(naturalWidth * scale),
            height: Math.round(naturalHeight * scale),
          },
        }));
      }
    },
    [imgDims],
  );

  // Render halaman pertama PDF ke canvas, hasilnya jadi dataURL persis
  // sesuai rasio & ukuran halaman PDF (di-scale ke batas MAX_W/MAX_H).
  const loadPdfPreview = useCallback(
    async (href: string) => {
      if (previews[href] || loading[href]) return;
      setLoading((prev) => ({ ...prev, [href]: true }));

      try {
        const mod = await import("pdfjs-dist");
        const pdfjsLib = (mod as any).default ?? mod;

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.3.289/pdf.worker.min.mjs";

        const pdf = await pdfjsLib.getDocument({ url: href }).promise;
        const page = await pdf.getPage(1);

        const baseViewport = page.getViewport({ scale: 1 });
        const scale = Math.min(
          MAX_W / baseViewport.width,
          MAX_H / baseViewport.height,
        );
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext("2d");
        if (!context) return;

        await page.render({ canvasContext: context, viewport }).promise;

        setPreviews((prev) => ({
          ...prev,
          [href]: {
            dataUrl: canvas.toDataURL("image/png"),
            width: viewport.width,
            height: viewport.height,
          },
        }));
      } catch (err) {
        console.error("Gagal me-render preview PDF:", err);
      } finally {
        setLoading((prev) => ({ ...prev, [href]: false }));
      }
    },
    [previews, loading],
  );

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Activity
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I like to be active
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time at school, I attended several webinars,
              competition, and courses. These activities motivated me to deepen
              my interest in programming.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => (
            <TimelineItem
              key={hackathon.title + hackathon.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {hackathon.dates && (
                  <time className="text-xs text-muted-foreground">
                    {hackathon.dates}
                  </time>
                )}
                {hackathon.title && (
                  <h3 className="font-semibold leading-none">
                    {hackathon.title}
                  </h3>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">
                    {hackathon.location}
                  </p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hackathon.links.map((link, idx) => {
                      const pdfPreview = previews[link.href];
                      const imgDim = imgDims[link.href];

                      return (
                        <HoverCard
                          key={idx}
                          openDelay={150}
                          closeDelay={50}
                          onOpenChange={(open) => {
                            if (open && isPdf(link.href)) {
                              loadPdfPreview(link.href);
                            }
                          }}
                        >
                          <HoverCardTrigger asChild>
                            <Link
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                                {link.icon}
                                {link.title}
                              </Badge>
                            </Link>
                          </HoverCardTrigger>

                          {(isPdf(link.href) || isImage(link.href)) && (
                            <HoverCardContent
                              side="top"
                              className="p-2 flex items-center justify-center w-auto h-auto"
                            >
                              {isPdf(link.href) ? (
                                pdfPreview ? (
                                  <img
                                    src={pdfPreview.dataUrl}
                                    alt={link.title}
                                    width={pdfPreview.width}
                                    height={pdfPreview.height}
                                    className="rounded"
                                  />
                                ) : (
                                  <div
                                    style={{ width: MAX_W, height: MAX_H }}
                                    className="flex items-center justify-center text-xs text-muted-foreground"
                                  >
                                    Memuat pratinjau...
                                  </div>
                                )
                              ) : (
                                <img
                                  src={link.href}
                                  alt={link.title}
                                  onLoad={(e) => handleImageLoad(link.href, e)}
                                  width={imgDim?.width}
                                  height={imgDim?.height}
                                  className="rounded object-contain"
                                  style={
                                    !imgDim
                                      ? { maxWidth: MAX_W, maxHeight: MAX_H }
                                      : undefined
                                  }
                                />
                              )}
                            </HoverCardContent>
                          )}
                        </HoverCard>
                      );
                    })}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
