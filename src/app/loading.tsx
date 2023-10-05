import { AwaitCategories } from "@/components/Categories/warning";
import { AwaitHeader } from "@/components/Header/waiting";
import { AwaitInformation } from "@/components/Info/waiting";
import { AwaitMenu } from "@/components/Menu/waiting";

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