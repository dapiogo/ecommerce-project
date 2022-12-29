interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => (
  <span className="rounded-xl border border-gray-700 whitespace-nowrap bg-blue-600 px-3 py-1.5 text-xs font-medium text-white">
    {rating}
  </span>
);

export default Rating;
