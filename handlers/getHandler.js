const getHandler = (req, res) => {
  const param = req.params.name;
  if (param === 'random') {
    res.send('Random Image!');
  } else {
    res.send(`${param} Image!`);
  }
};

export default getHandler;
