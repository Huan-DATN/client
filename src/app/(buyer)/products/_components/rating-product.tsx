import { RatingBar } from '@/components/rating-bar';

export default function RatingProduct() {
	const data = {
		sum: 2,
		average: 4.5,
		ratingByStar: [0, 0, 0, 1, 1],
		ratings: [
			{
				id: '1',
				userId: '1',
				productId: '1',
				rating: 5,
				comment: 'Sản phẩm rất tốt',
				createdAt: '2023-10-01T12:00:00Z',
				updatedAt: '2023-10-01T12:00:00Z',
				user: {
					id: '1',
					name: 'Nguyễn Văn A',
					avatar: 'https://example.com/avatar1.jpg',
				},
			},
			{
				id: '2',
				userId: '2',
				productId: '1',
				rating: 4,
				comment: 'Sản phẩm tốt nhưng có một số vấn đề nhỏ',
				createdAt: '2023-10-02T12:00:00Z',
				updatedAt: '2023-10-02T12:00:00Z',
				user: {
					id: '2',
					name: 'Trần Thị B',
					avatar: 'https://example.com/avatar2.jpg',
				},
			},
		],
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-row div-center gap-4">
				<div className="text-2xl font-bold mb-2">5.0/5 (2)</div>
				<div className="mb-4 min-w-[70%]">
					{data.ratingByStar.map((star, index) => (
						<div key={index + 1} className="flex items-center gap-2">
							<span className="w-10 div-center justify-between ">
								{index + 1} ⭐
							</span>
							<RatingBar value={star} sum={data.sum} />
							<span>0 đánh giá</span>
						</div>
					))}
				</div>
			</div>

			<div className="space-y-4">
				{data.ratings.map((rating) => (
					<div key={rating.id} className="bg-gray-100 p-3 rounded">
						<p className="font-semibold">
							{rating.user.name}{' '}
							<span className="text-sm text-gray-500">
								{new Date(rating.createdAt).toLocaleDateString()}
							</span>
						</p>
						<p className="text-yellow-400">
							{Array.from({ length: rating.rating }, (_, i) => (
								<span key={i}>⭐</span>
							))}
						</p>
						<p>{rating.comment}</p>
					</div>
				))}
			</div>
		</div>
	);
}
