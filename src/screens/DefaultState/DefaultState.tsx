import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { MediaDetails } from "./sections/MediaDetails";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  dimensions: string;
  size?: string;
  created?: string;
  label?: string;
  altText?: string;
  description?: string;
}

export const DefaultState = (): JSX.Element => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-4 md:p-16">
      <Card className="w-full max-w-[1500px] h-[90vh] rounded-[20px] overflow-hidden shadow-[0px_41px_91px_#0000001a,0px_165px_165px_#00000017,0px_371px_223px_#0000000d,0px_660px_250px_#00000003,0px_1031px_250px_transparent]">
        <CardContent className="p-0 h-full">
          <div className="flex flex-col w-full h-full">
            <FrameByAnima onClose={() => setSelectedMedia(null)} />
            {selectedMedia ? (
              <MediaDetails media={selectedMedia} onClose={() => setSelectedMedia(null)} />
            ) : (
              <FrameWrapperByAnima onMediaSelect={setSelectedMedia} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};