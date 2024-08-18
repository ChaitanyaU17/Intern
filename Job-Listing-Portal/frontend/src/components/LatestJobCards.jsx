import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
      <h1 className="font-medium text-lg">Company Name</h1>
      <p className="text-base text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-medium text-lg">Job Title</h1>
        <p className="text-sm text-gray-600">Description</p>
      </div>
    <div className="flex items-center gap-2 mt-4">
        <Badge className="text-indigo-400 font-bold" variant="ghost">12 Positions</Badge>
        <Badge className="text-red-600 font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-violet-800 font-bold" variant="ghost">24LPA</Badge>
    </div>
    </div>
  )
}

export default LatestJobCards;
