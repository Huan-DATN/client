import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function ConfirmDialog() {
	return (
		<AlertDialog>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Bạn sẽ đăng xuất khỏi hệ thống</AlertDialogTitle>
					<AlertDialogDescription>
						Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không? Nếu bạn đăng
						xuất, bạn sẽ không thể truy cập vào các tính năng của hệ thống nữa.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Huỷ</AlertDialogCancel>
					<AlertDialogAction>Tiếp tục</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
