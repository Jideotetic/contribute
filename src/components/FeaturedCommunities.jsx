import { COMMUNITIES } from "@/lib/constants";
import { useNavigate } from "react-router";
import CommunitiesCard from "./CommunitiesCard";
import { Button } from "./ui/button";

function FeaturedCommunities() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F7F9FD]">
      <div className="mx-auto w-full max-w-[1200px] space-y-8 px-5 py-10 md:py-[104px]">
        <div className="mx-auto max-w-[1200px] space-y-8 text-center text-[#050215]">
          <h2 className="text-[32px] font-extrabold md:text-[44px]">
            Featured Communities
          </h2>

          <p className="mx-auto max-w-[800px] text-[18px] font-light md:text-[20px]">
            Join thousands of contributors making impact across decentralized
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {COMMUNITIES.slice(0, 6).map((community, i) => (
            <CommunitiesCard community={community} key={i} tag="home-page" />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => {
              navigate("/communities");
            }}
            size="lg"
            variant="secondary"
          >
            Explore all Communities
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCommunities;
