import { Star } from 'lucide-react'


export const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )