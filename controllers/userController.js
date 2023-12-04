const userData = {
  name: {
    name: "efren",
  },
  last: {
    last: "mendoza",
  },
};

exports.getAll = (req, res, next) => {
  res.json(userData);
  res.status(200).send();
};
