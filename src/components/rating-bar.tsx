import { Progress } from '@/components/ui/progress';

export function RatingBar({ value, sum }: { value: number; sum: number }) {
	// Convert the value to a percentage

	const percentage = sum != 0 ? (value / sum) * 100 : 0;

	return <Progress value={percentage} className="max-w-[60%] " />;
}
