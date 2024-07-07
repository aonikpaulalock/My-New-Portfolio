const imageUploadApi = "ab44083a680f1ff8d7a143435888c291"
export const uploadImageToImageBB = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await fetch(`https://api.imgbb.com/1/upload?key=${imageUploadApi}`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    return data.data.display_url;
  } else {
    throw new Error('Image upload failed');
  }
};