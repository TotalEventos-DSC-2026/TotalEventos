function createConsultarGradeSessoes(sessoesRepository) {
  return function consultarGradeSessoes({ eventoId, data, horario, sala }) {
    const sessoes = sessoesRepository.consultarGrade({
      eventoId,
      data,
      horario,
      sala,
    });

    return {
      eventoId,
      sessoes,
      ...(sessoes.length === 0 && {
        mensagem: 'A programação ainda não foi disponibilizada.',
      }),
    };
  };
}

module.exports = { createConsultarGradeSessoes };
