'use client';

import { Command, CommandInput } from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function CommandDialogDemo() {
	const [value, setValue] = useState('');
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'Enter' && value.trim()) {
				e.preventDefault();
				console.log('Navigating to search with value:', value);
				router.push(`/search?q=${encodeURIComponent(value)}`);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [value]);

	return (
		<Command>
			<CommandInput
				value={value}
				onValueChange={(e) => setValue(e)}
				placeholder="search..."
			/>
		</Command>
	);
}
