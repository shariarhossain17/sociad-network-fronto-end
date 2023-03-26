import PostCard from "@/components/PostCard/PostCard";
import Story from "@/components/Story/Story";
import PageLayout from "@/Layout/PageLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex py-12">
        <div>
          <Story />
          <div className="w-[650px]">
            <PostCard />
          </div>
        </div>
        <div className="">fotter</div>
      </div>
    </>
  );
}

Home.Layout = PageLayout;
