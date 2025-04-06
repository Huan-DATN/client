import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import React from 'react';

type AlertDialogComponentProps = {
	alertDialogTrigger: React.ReactNode;
	alertDialogTitle: React.ReactNode | string;
	alertDialogDescription: React.ReactNode | string;
	alertDialogAction: React.ReactNode;
};

export default function AlertDialogComponent({
	alertDialogTrigger,
	alertDialogTitle,
	alertDialogDescription,
	alertDialogAction,
}: AlertDialogComponentProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{alertDialogTrigger}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle asChild>{alertDialogTitle}</AlertDialogTitle>
					<AlertDialogDescription asChild>
						{alertDialogDescription}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Huỷ</AlertDialogCancel>
					<AlertDialogAction asChild>{alertDialogAction}</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
