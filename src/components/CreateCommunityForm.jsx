import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CustomInput from "./CustomInput";
import { Textarea } from "./ui/textarea";
import FileUpload from "./FileUpload";

function CreateCommunityForm() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary" size="lg" className="w-full">
            Create Community
          </Button>
        </DialogTrigger>
        <DialogContent className="scrollbar-hidden max-h-[calc(100vh-200px)] overflow-scroll bg-white sm:max-w-[668px]">
          <DialogHeader>
            <DialogTitle className="text-left text-[18px] text-[#050215] sm:text-[24px]">
              New Community
            </DialogTitle>
            <DialogDescription className="sr-only">
              Enter the community details here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5 sm:grid-cols-2">
            <CustomInput
              label="Community Name"
              placeholder="Enter Text"
              type="text"
            />

            <CustomInput
              label="Community Name"
              placeholder="Enter Text"
              type="text"
            />

            <CustomInput
              label="Website"
              placeholder="Paste URL"
              prefix="https://"
              type="url"
            />

            <CustomInput
              label="Github"
              placeholder="Paste URL"
              prefix="https://"
              type="url"
            />

            <CustomInput
              label="Twitter"
              placeholder="Paste URL"
              prefix="https://"
              type="url"
            />

            <CustomInput
              label="Instagram"
              placeholder="Paste URL"
              prefix="https://"
              type="url"
            />

            <FileUpload
              buttonText="Upload Logo"
              description="Files supported: PNG, JPEG"
              accept="image/png, image/jpeg"
            />

            <FileUpload
              buttonText="Upload Cover Photo"
              description="Files supported: PNG, JPEG"
              accept="image/png, image/jpeg"
            />

            <Label className="flex flex-col items-start gap-2 font-light text-[#09032A]">
              Community Description
              <Textarea
                className="h-[96px] rounded-[12px] border-none bg-[#F7F9FD] px-4 placeholder:text-sm placeholder:text-[#8791A7] focus:border-none focus:outline-0 focus:outline-none focus-visible:border-none focus-visible:ring-0"
                placeholder="What's the community about?"
              />
            </Label>
          </div>
          <DialogFooter>
            <DialogClose asChild></DialogClose>
            <Button variant="secondary" size="lg" type="submit">
              Proceed
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default CreateCommunityForm;
