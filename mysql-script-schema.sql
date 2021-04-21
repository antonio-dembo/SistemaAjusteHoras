--
-- Banco de Dados: `sistema_ajuste_horas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE usuarios (
  id_usuario int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  primeiro_nome varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  segundo_nome varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  email varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  senha varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  tipo_usuario varchar (50) COLLATE utf8_unicode_ci NOT NULL,
  CONSTRAINT PK_AJUSTES PRIMARY KEY (id)

) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO usuarios (id_usuario, primeiro_nome, segundo_nome, email, senha, tipo_usuario) 
VALUES 
(1, 'John', 'Doe', 'johndoe@teste.com', 'FT') ,
(1, 'Maria', 'Doe', 'mariadoe@teste.com', 'CC')
(1, 'Ana', 'Doe', 'anadoe@teste.com', 'CNP');


-- --------------------------------------------------------

--
-- Estrutura da tabela `Ajustes`
--


CREATE TABLE ajustes (
  id_ajuste INT(11) UNSIGNED AUTO_INCREMENT NOT NULL,
  data_ajuste DATE NOT NULL,
  entrada time NOT NULL,
  saida time NOT NULL,
  total_horas INT(6) NOT NULL,
  justificativa varchar(50) NOT NULL,
  CONSTRAINT PK_AJUSTES PRIMARY KEY (id)

) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

INSERT INTO ajustes (ajusteID, entrada, saida, total_horas, justificativa) 
VALUES
(1, '2016-10-10', '08:00', '12:00', 4, 'Versionamento'),
(2, '2016-10-02', '13:00', '17:00', 4, 'Produção'),
(3, '2016-12-10', '10:00', '12:00', 2, 'Capacitação');
