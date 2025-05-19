import {
  ChevronDownIcon,
  ClockIcon,
  SquareStack,
  FileImageIcon,
  FilmIcon,
  GridIcon,
  ImageIcon,
  ListIcon,
  MoreVerticalIcon,
  Pencil,
  Play,
  PlusIcon,
  Settings,
  Shapes,
  TagIcon,
  Trash2,
  UploadIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../../../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Input } from "../../../../components/ui/input";
import { MediaItem } from "../../DefaultState";

interface FrameWrapperByAnimaProps {
  onMediaSelect: (media: MediaItem) => void;
}

export const FrameWrapperByAnima = ({ onMediaSelect }: FrameWrapperByAnimaProps): JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const [newLabelColor, setNewLabelColor] = useState("#7625BE");
  const [labels, setLabels] = useState([
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
  ]);

  const handleAddLabel = () => {
    if (newLabelName.trim()) {
      setLabels([
        ...labels,
        {
          name: newLabelName,
          color: newLabelColor.replace('#', ''),
          active: false,
        },
      ]);
      setNewLabelName("");
      setNewLabelColor("#7625BE");
      setIsDialogOpen(false);
    }
  };

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

  // Media items data
  const mediaItems: MediaItem[] = [
    { id: "1", type: "image", title: "Hero_Image.png", dimensions: "1920x1080", label: "Hero Images", size: "2.34 MB", created: "8 May, 2025" },
    { id: "2", type: "image", title: "Staff Images", dimensions: "1920x1080", label: "Staff Pictures" },
    { id: "3", type: "image", title: "Neon Shoe.jpg", dimensions: "1920x1080", label: "Store Assets" },
    { id: "4", type: "video", title: "Game Console.mp4", dimensions: "700x700", label: "Store Assets" },
    { id: "5", type: "image", title: "Desk Illustration.png", dimensions: "1920x1080", label: "Blog Assets" },
    { id: "6", type: "image", title: "Portrait.jpg", dimensions: "800x1080", label: "Staff Pictures" },
    { id: "7", type: "video", title: "Desk Illustration 2.mp4", dimensions: "1920x1080", label: "Blog Assets" },
    { id: "8", type: "image", title: "Bicycle Scene.png", dimensions: "1920x1080", label: "Website Assets" },
    { id: "9", type: "image", title: "Snow Path.jpg", dimensions: "1080x1920", label: "Blog Assets" },
    { id: "10", type: "image", title: "Headphones.png", dimensions: "1920x1080", label: "Store Assets" },
    { id: "11", type: "image", title: "Virtual Reality.png", dimensions: "1920x1080", label: "Website Assets" },
    { id: "12", type: "image", title: "Lake & Mountain", dimensions: "1080x1920", label: "Blog Assets" },
    { id: "13", type: "image", title: "Phone Gift", dimensions: "1920x1080", label: "Store Assets" },
    { id: "14", type: "image", title: "Laptop Illustration", dimensions: "1920x1080", label: "Website Assets" },
    { id: "15", type: "image", title: "Smart Watch Gift", dimensions: "1920x1080", label: "Store Assets" },
    { id: "16", type: "image", title: "Pizza Table", dimensions: "1200x1200", label: "Blog Assets" },
  ];

  return (
    <div className="flex items-start relative flex-1 self-stretch w-full grow">
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
            <Button variant="ghost" size="icon" className="h-5 w-5 p-0" onClick={() => setIsDialogOpen(true)}>
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

      {/* Main Content Area */}
      <div className="flex flex-col items-start relative flex-1 self-stretch grow overflow-hidden">
        {/* Toolbar */}
        <div className="flex h-[54px] items-center gap-5 px-[30px] py-0 relative self-stretch w-full bg-neutral-100 border-b border-[#dcdcdc]">
          <span className="relative w-fit font-UI-text-small text-black text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)]">
            {mediaItems.length} Items
          </span>

          <div className="inline-flex items-center justify-center gap-[5px] relative">
            <span className="relative w-fit mt-[-1.00px] font-UI-text-small text-[#646464] text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)]">
              Sort: Upload Date
            </span>
            <ChevronDownIcon className="w-[13px] h-[13px] text-[#646464]" />
          </div>

          <div className="inline-flex items-center justify-center gap-[5px] relative">
            <span className="relative w-fit mt-[-1.00px] font-UI-text-small text-[#646464] text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)]">
              Filter: None
            </span>
            <ChevronDownIcon className="w-[13px] h-[13px] text-[#646464]" />
          </div>

          <div className="flex-1" />

          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col w-[35px] h-[35px] items-center justify-center p-2.5 bg-[#dcdcdc] rounded-lg"
          >
            <GridIcon className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col w-[30px] h-[30px] items-center justify-center p-2.5 rounded-lg"
          >
            <ListIcon className="w-6 h-6" />
          </Button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-5 gap-5 p-5 w-full overflow-auto">
          {mediaItems.map((item) => (
            <Card
              key={item.id}
              className="w-full rounded-[17px] border border-solid border-gray-100 shadow-[0px_2px_5px_#8080801a,0px_9px_9px_#80808017,0px_20px_12px_#8080800d,0px_36px_14px_#80808003,0px_57px_16px_transparent] cursor-pointer"
              onClick={() => onMediaSelect(item)}
            >
              <CardContent className="p-2.5 flex flex-col gap-2.5">
                <div className="relative w-full h-[177px] rounded overflow-hidden border border-solid border-[#ebebeb]">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-[122px] top-8 left-0 bg-cover bg-center">
                      {item.type === "video" && (
                        <div className="inline-flex flex-col items-center justify-center gap-2.5 p-2.5 absolute top-[35px] left-[calc(50%-12px)] bg-[#ffffffcc] rounded-xl">
                          <Play className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div className="absolute w-5 h-5 top-1.5 left-[5px]">
                      <Checkbox className="w-5 h-5 rounded-md border border-solid border-[#bebebe] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,245,245,1)_100%)]" />
                    </div>
                  </div>
                </div>

                <div className="flex h-[45px] items-center justify-between relative self-stretch w-full">
                  <div className="inline-flex flex-col items-start justify-center">
                    <span className="relative w-fit mt-[-1.00px] font-UI-text-small text-[#464646] text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)] whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="relative w-fit font-UI-text-small text-[#828282] text-[length:var(--UI-text-small-font-size)] tracking-[var(--UI-text-small-letter-spacing)] leading-[var(--UI-text-small-line-height)] whitespace-nowrap">
                      {item.dimensions}
                    </span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="w-5 h-5 p-0">
                        <MoreVerticalIcon className="w-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Rename</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ImageIcon className="mr-2 h-4 w-4" />
                        <span>Edit Image</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TagIcon className="mr-2 h-4 w-4" />
                        <span>Add Label</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>SEO</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete Permanently</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Label Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Label</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Label Name
              </label>
              <Input
                id="name"
                value={newLabelName}
                onChange={(e) => setNewLabelName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="color" className="text-sm font-medium">
                Label Color
              </label>
              <Input
                id="color"
                type="color"
                value={newLabelColor}
                onChange={(e) => setNewLabelColor(e.target.value)}
                className="col-span-3 h-10"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddLabel}>Add Label</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};