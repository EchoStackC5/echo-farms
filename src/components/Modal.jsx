import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  forwardRef,
  ReactNode,
  // useImperativeHandle,
  // useRef,
  // useState,
} from "react";
import ButtonLoader from "./buttonLoader";

// interface IModalProps {
//   trigger: string | ReactNode;
//   headerText: string;
//   subText?: string;
//   children?: ReactNode;
//   submitButtonText?: string;
//   onClick?: () => void;
//   isLoading?: boolean;
// }

const Modal = forwardRef(
  (
    {
      trigger,
      headerText,
      subText,
      children,
      submitButtonText,
      onClick,
      isLoading,
    },
    // ref
  ) => {
    // const [open, setOpen] = useState(false);
    // const dialogContentRef = useRef<HTMLDivElement | null>(null);
    // useImperativeHandle(ref, () => ({
    //   close: () => {
    //     setOpen(false);
    //   },
    // }));
    // const handleOpenChange = (isOpen: boolean) => {
    //   setOpen(isOpen);
    // };

    return (
      <Dialog
      // open={open}
      // onOpenChange={handleOpenChange}
      >
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px]"
          // ref={dialogContentRef}
        >
          <DialogHeader>
            <DialogTitle>{headerText}</DialogTitle>
            {subText && <DialogDescription>{subText}</DialogDescription>}
          </DialogHeader>
          {children}
          {onClick && (
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={isLoading}>
                  Cancel
                </Button>
              </DialogClose>

              <Button disabled={isLoading} onClick={onClick} type={"button"}>
                {isLoading ? <ButtonLoader /> : submitButtonText ?? "Confirm"}
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  },
);

export default Modal;
