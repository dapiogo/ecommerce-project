interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => (
  <span className="w-7 h-7 rounded-xl border border-gray-700 whitespace-nowrap bg-blue-600  text-xs font-medium text-white flex items-center justify-center">
    {rating}
  </span>
);

export default Rating;
