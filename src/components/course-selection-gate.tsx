"use client";

import { useCourse } from "@/context/course-context";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { COURSE_OPTIONS } from "@/context/course-context";
import { BookOpenCheck, MapPin } from "lucide-react";

export function CourseSelectionGate() {
  const { isCourseChosen, setCourse } = useCourse();

  return (
    <Dialog open={!isCourseChosen}>
      <DialogContent
        className="sm:max-w-lg [&>button:last-child]:hidden"
        onPointerDownOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl">Choose your course</DialogTitle>
          <DialogDescription>
            Pick the exam track you are preparing for. The app will tailor labels and entry flow accordingly.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 pt-2">
          <Button
            variant="outline"
            className="h-auto justify-start gap-3 p-4 text-left"
            onClick={() => setCourse(COURSE_OPTIONS.clat.key)}
          >
            <BookOpenCheck className="h-5 w-5 text-primary" />
            <span className="flex flex-col items-start">
              <span className="font-semibold">{COURSE_OPTIONS.clat.label}</span>
              <span className="text-xs text-muted-foreground">General all-India CLAT flow and materials</span>
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-auto justify-start gap-3 p-4 text-left"
            onClick={() => setCourse(COURSE_OPTIONS.mhcet.key)}
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span className="flex flex-col items-start">
              <span className="font-semibold">{COURSE_OPTIONS.mhcet.label}</span>
              <span className="text-xs text-muted-foreground">Maharashtra-focused 5-year LLB flow using the same study base</span>
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
