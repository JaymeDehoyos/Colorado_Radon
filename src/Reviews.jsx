import { Typography, Rating } from "@material-tailwind/react";

function Reviews() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Our Reviews</h2>
      <hr className="h-px my-7 bg-gray-300 border-0 dark:bg-gray-700"></hr>
      <div className="px-8 py-4 rounded-xl shadow-lg m-auto text-center">
        <Typography variant="h4" color="blue-gray" className="mb-6 font-normal">
          &quot;Jared is a highly skilled craftsman.  He built a patio cover for our home and did a wonderful job.  
          We are thrilled with the design, stone pillars, and quality of work.  
          We have enjoyed our patio for almost two years now and it gives our home a larger feel.  
          Jared is also very prompt, kind, and has a great sense of humor.&quot;
        </Typography>
        <Typography variant="h6" className="mt-4">
          Z Hamilton
        </Typography>
        <Typography color="gray" className="mb-4 font-normal">
          Google Review
        </Typography>
        <Rating value={5} readonly />
      </div>
    </div>
  )
}

export default Reviews;
