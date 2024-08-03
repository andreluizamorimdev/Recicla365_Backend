const { verify } = require("jsonwebtoken");

function validaToken(request, response, next) {
  try {
    const token = request.headers.authorization;

    if (!token) {
      return response.status(400).json({ message: "Token não informado" });
    }

    const tokenTratado = token.split(" ")[1];

    const verificacao = verify(tokenTratado, process.env.JWT_SECRET);

    request.usuarioId = verificacao.id;

    next();
  } catch (error) {
    console.log(error);
    if (error.message === "jwt malformed") {
      return response
        .status(401)
        .json({ message: "O Token está mal formatado" });
    } else if (error.message === "jwt expired") {
      return response.status(401).json({ message: "O Token está expirado" });
    } else {
      return response.status(401).json({ message: "Token inválido" });
    }
  }
}

module.exports = validaToken;
