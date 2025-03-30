import http from '@/lib/http';

const mediaRequest = {
	uploadImage: (formData: FormData) => {
		return http.post<{
			message: string;
			data: string;
		}>('/media/upload', formData);
	},
};

export default mediaRequest;
