const colecao = [
  "https://hips.hearstapps.com/hmg-prod/images/wh-sexposition-69-01-1633532100.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-face-off-1562099039.png?crop=1xw:1xh;center,top&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-doggie-style-rear-entry-1562099264.png?crop=1xw:1xh;center,top&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-prezel-dip-1562098803.png?crop=1xw:1xh;center,top&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-flatiron-1562098910.png?crop=1.00xw:0.668xh;0,0.150xh&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-g-whiz-1633534876.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/cowgirl-s-helperat4x-100-64c289ad4dc83.jpg?crop=1xw:1xh;center,top&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-wheelbarrow-1562099216.png?crop=0.887xw:0.885xh;0.0605xw,0.0689xh&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-leap-frog-1562099088.png?crop=1.00xw:1.00xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-cowgirl-1562099177.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-reverse-cowgirl-1562099345.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-the-seashell-1562099511.png?crop=1.00xw:0.668xh;0,0.163xh&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-valedictorian-1562099613.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-table-top-1562099764.png?crop=1.00xw:1.00xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-upstanding-citizen-1562099598.png?resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/wmh07012019-sex-positions-the-snake-1562099785.png?crop=0.998xw:1.00xh;0,0&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod/images/swing-663b8b0821123.jpg?crop=1xw:1xh;center,top&resize=640:*"
];
function mostrarAleatorio() {
  const aleatorio = Math.floor(Math.random() * colecao.length);
  const urlImagem = colecao[aleatorio];

  document.getElementById('imagem').src = urlImagem;
}
