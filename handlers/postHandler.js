const postHandler = (req, res) => {
  const image = req.files;
  const imageBody = req.body;
  console.log(image);
  console.log(imageBody);
  res.send('Image Uploaded');
};

export default postHandler;
