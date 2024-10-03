import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from 'next/image'
import { IBookInfo }  from "@/app/types/posts";

export function BookInfo(
  props: IBookInfo
) {
  return (
    <div>
      <Drawer>
        <div className="flex justify-center items-center mt-8">
          <DrawerTrigger>
          <div className="border rounded-md w-48 p-2 border-slate-200 dark:border-slate-700">View book info</div>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader>
          <DrawerTitle className="flex justify-center">{props.bookTitle}</DrawerTitle>
            <DrawerDescription className="flex justify-center" asChild>
              {/* <Image src={`/sherlockholmes.jpeg`} alt="test" width={100} height={100} /> */}
              <div className="pl-4 flex flex-col">
                <p>Author: <span className="font-semibold">{props.author}</span></p>
                <p>Published: <span className="font-semibold">{props.publishedYear}</span></p>
                <p>Publisher: <span className="font-semibold">{props.publisher}</span></p>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose className="flex justify-center items-center">
              <div className="border rounded-md w-20 p-2">Close</div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
