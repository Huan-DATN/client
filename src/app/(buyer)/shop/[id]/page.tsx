export default function ShopDetail({ params }: { params: { id: string } }) {
	const { id } = params; // TODO: Fetch product details from an API or database using the id

	return <div>This is Shop Detail {id}</div>;
}
