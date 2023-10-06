import { AwaitMenu } from "@/components/Menu/waiting";
import { AwaitHeader } from "@/components/Header/waiting";
import { AwaitCategories } from "@/components/Categories/warning";
import { AwaitInformation } from "@/components/Info/waiting";

export default function Loading() {
     return ( 
     <>
          <AwaitHeader />
          <AwaitInformation />
          <AwaitCategories />
          <AwaitMenu />
     </>
     )
}