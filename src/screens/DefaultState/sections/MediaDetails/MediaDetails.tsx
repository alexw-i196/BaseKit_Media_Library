import React, { useState } from "react";
import { ChevronLeft, ClockIcon, FileImageIcon, FilmIcon, GridIcon, ImageIcon, ListIcon, PlusIcon, Shapes, SquareStack, TagIcon, UploadIcon, Pencil, Settings2, Trash2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { MediaItem } from "../../DefaultState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

interface MediaDetailsProps {
  media: MediaItem;
  onClose: () => void;
}

export const MediaDetails = ({ media, onClose }: MediaDetailsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState("details");
  const [fileName, setFileName] = useState(media.title);

  // Categories data
  const categories = [
    {
      icon: <ClockIcon className="w-[22px] h-[22px] text-grey-80" />,
      name: "Recent Media",
    },
    {
      icon: <ImageIcon className="w-[22px] h-[22px] text-grey-80" />,
      name: "Template Images",
    },
    {
      icon: <FileImageIcon className="w-[22px] h-[22px] text-grey-80" />,
      name: "Stock Images",
    },
    {
      icon: <FilmIcon className="w-[22px] h-[22px] text-grey-80" />,
      name: "Stock Videos",
    },
    {
      icon: <SquareStack className="w-[22px] h-[22px] text-grey-80" />,
      name: "Icons",
    },
    {
      icon: <Shapes className="w-[22px] h-[22px] text-grey-80" />,
      name: "Shapes",
    },
  ];

  const labels = [
    {
      name: "Website Assets",
      color: "purple-60-main",
      active: true,
    },
    {
      name: "Hero Images",
      color: "blue-500",
    },
    {
      name: "Staff Pictures",
      color: "green-500",
    },
    {
      name: "Store Assets",
      color: "orange-500",
    },
    {
      name: "Blog Assets",
      color: "pink-500",
    },
  ];

  return (
    <div className="flex items-start relative flex-1 self-stretch w-full">
      {/* Sidebar */}
      <div className="flex flex-col w-[250px] items-center gap-5 p-5 relative self-stretch border-r border-[#dcdcdc]">
        {/* Upload Media Button */}
        <Button className="flex h-[45px] items-center justify-center gap-2.5 pl-3 pr-4 py-3 relative self-stretch w-full bg-purple-60-main rounded-lg">
          <UploadIcon className="w-5 h-5" />
          <span className="font-['Rubik',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
            Upload Media
          </span>
        </Button>

        {/* Categories Section */}
        <div className="flex flex-col items-start gap-[5px] px-0 py-2.5 relative self-stretch w-full">
          <h3 className="relative w-fit mt-[-1.00px] font-['Rubik',Helvetica] font-medium text-[#828282] text-[13px] tracking-[0.65px] leading-6">
            CATEGORIES
          </h3>

          {categories.map((category, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-[30px] rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer"
            >
              <div className="inline-flex items-center gap-2.5 relative top-1 left-3.5">
                {category.icon}
                <span className="relative w-fit font-UI-text-small text-grey-80 text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)] whitespace-nowrap">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Labels Section */}
        <div className="flex flex-col items-start gap-[5px] px-0 py-2.5 relative self-stretch w-full">
          <div className="flex items-center justify-between relative self-stretch w-full">
            <h3 className="relative w-fit mt-[-1.00px] font-['Rubik',Helvetica] font-medium text-[#828282] text-[13px] tracking-[0.65px] leading-6">
              LABELS
            </h3>
            <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
              <PlusIcon className="h-5 w-5 text-[#828282]" />
            </Button>
          </div>

          {labels.map((label, index) => (
            <div
              key={index}
              className={`relative self-stretch w-full h-[30px] rounded-lg overflow-hidden ${
                label.active ? "bg-purple-10" : "hover:bg-gray-100"
              } cursor-pointer`}
            >
              <div className="inline-flex items-center gap-2.5 relative top-[5px] left-3.5">
                <TagIcon className={`w-5 h-5`} style={{ color: `#${label.color}` }} />
                <span
                  className={`relative w-fit mt-[-1.00px] font-UI-text-small ${
                    label.active ? "text-purple-60-main" : "text-grey-80"
                  } text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)] whitespace-nowrap`}
                >
                  {label.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Toolbar */}
        <div className="flex h-[54px] items-center px-[30px] py-0 bg-neutral-100 border-b border-[#dcdcdc]">
          <Button variant="ghost" className="mr-2 -ml-2" onClick={onClose}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="font-UI-text-small font-bold text-black text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)]">
            {media.title}
          </span>
        </div>

        <div className="flex flex-1">
          {/* Main Content */}
          <div className="flex-1 p-8 flex items-center justify-center bg-[#f5f5f5]">
            <div className="relative max-w-full max-h-full">
              <img
                src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg"
                alt={media.altText || media.title}
                className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-[400px] border-l border-[#dcdcdc] p-6">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="seo" className="flex-1">SEO</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">File Name</h3>
                  <Input
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    className="font-medium"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-10 rounded-lg">
                    <FileImageIcon className="w-5 h-5 text-purple-60-main" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Type</h3>
                    <p className="text-base font-medium">{media.type === "image" ? "Image (PNG)" : "Video"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-10 rounded-lg">
                    <Settings2 className="w-5 h-5 text-purple-60-main" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Size</h3>
                    <p className="text-base font-medium">{media.size || "2.34 MB"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-10 rounded-lg">
                    <ImageIcon className="w-5 h-5 text-purple-60-main" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Dimensions</h3>
                    <p className="text-base font-medium">{media.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-10 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-purple-60-main" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Created</h3>
                    <p className="text-base font-medium">{media.created || "8 May, 2025"}</p>
                  </div>
                </div>

                <Separator className="my-6" />
                <h3 className="text-sm font-medium text-gray-500">Actions</h3>

                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit Image
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <TagIcon className="w-4 h-4 mr-2" />
                    Add Label
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Permanently
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="seo">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1 block">Alt Text</label>
                    <input
                      type="text"
                      placeholder="Describe this media for accessibility"
                      className="w-full p-2 border rounded-md"
                      value={media.altText || ""}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1 block">Description</label>
                    <textarea
                      placeholder="Add a description to display with this media"
                      className="w-full p-2 border rounded-md h-32"
                      value={media.description || ""}
                    />
                  </div>
                  <Button className="w-full">
                    Generate SEO with AI Writer
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};