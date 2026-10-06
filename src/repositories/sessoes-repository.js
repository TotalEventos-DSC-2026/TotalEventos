function createSessoesRepository(sessoes = []) {
  return {
    consultarGrade({ eventoId, data, horario, sala }) {
      const salaNormalizada = sala?.trim().toLocaleLowerCase('pt-BR');

      return sessoes.filter((sessao) => {
        if (
          sessao.eventoId !== eventoId ||
          sessao.publicada !== true ||
          sessao.ativa !== true
        ) {
          return false;
        }

        if (data && sessao.data !== data) {
          return false;
        }

        if (
          horario &&
          !(sessao.horaInicio <= horario && horario < sessao.horaFim)
        ) {
          return false;
        }

        if (
          salaNormalizada &&
          sessao.sala.trim().toLocaleLowerCase('pt-BR') !== salaNormalizada
        ) {
          return false;
        }

        return true;
      });
    },
  };
}

module.exports = { createSessoesRepository };
