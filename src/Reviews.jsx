import { Carousel, Typography, Rating } from "@material-tailwind/react";

 
function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="max-w-[640px] m-auto py-16 px-28 items-center h-full w-full">
        <img
          src=""
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              &quot;Jared is a highly skilled craftsman.  He built a patio cover for our home and did a wonderful job.
              We are thrilled with the design, stone pillars, and quality of work.
              We have enjoyed our patio for almost two years now and it gives our home a larger feel.
              Jared is also very prompt, kind, and has a great sense of humor.&quot;
            </Typography>
            <Typography
              variant="h6"
              color="white"
              className="mt-4"
            >
              Z Hamilton
              <br></br>
              Google Review
            </Typography>
            <Rating value={5} readonly />
          </div>
        </div>
      </div>
      {/* <div className="relative h-full w-full">
        <img
          src=""
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h4"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src=""
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h4"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div> */}
    </Carousel>
  );
}

export default CarouselWithContent;
