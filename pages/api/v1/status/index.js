function status(request, response) {
  response.status(200).json({ mensagem: "Ok" });
}

export default status;
