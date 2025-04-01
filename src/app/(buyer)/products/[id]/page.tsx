export default function ProductDetail({ params }: { params: { id: string } }) {
	const { id } = params;

	return <div>Đây là trang {id}</div>;
}
