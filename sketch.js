/*grelha baseada no código https://openprocessing.org/sketch/2252812 */
let grid; // Declare object
let gridColor;
let old_english, times, roboto; 
let texto= "<p> animation or live-action. While vintage flair, bold colour scheme and keen costume design are obvious components of this unique aesthetic, there are numerous subtle ways he creates his distinctive look. And it&#39;s not all visual. The style of this singular auteur also evinces a particular warmth, as well as a sense of escapism and adventure, akin to reading by torchlight under the duvet covers at night. With his new release Asteroid City in cinemas in June, we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of cinema.&nbsp; we&#39;ll be treated anew to Wes Anderson&#39;s brand of</p><p>To honour the occasion, let&#39;s take a look at how he achieves this unique story-book aesthetic. E agora como fica isto? teste novo oupas parece funcionar fixe. And it&#39;s not all visual. The style of this singular auteur also evinces a particular warmthAnd it&#39;s not all visual. The style of this singular auteur also evinces a particular warmth. And it&#39;s not all visual.  And it&#39;s not all visual.  And it&#39;s not all visual.  And it&#39;s not all visual.  The style of this singular auteur also evinces a particular warmth dhsbdhabdsha</p><p>Olá warmth dhsbdhabdsha</p>p>Olá warmth teste 2 com o objeti</p><p>Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema.Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema. Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema. Wes Anderson&rsquo;s style is one of the most distinctive in contemporary cinema. </p>"

let textocosmic = "<p>Wes Anderson, um dos cineastas mais singulares e inovadores de Hollywood, transformou-se em um verdadeiro fenômeno nas redes sociais. Seu estilo visual inconfundível, narrativa peculiar e a habilidade de criar universos cinematográficos únicos conquistaram tanto críticos quanto o público em geral. Com uma carreira que abrange mais de duas décadas, Anderson não apenas redefiniu o cinema independente, mas também se tornou um ícone da cultura pop contemporânea. Este artigo explora a trajetória, o estilo e o impacto de Wes Anderson, além de analisar como ele se tornou uma trend nas redes sociais.</p><p>A Ascensão de Wes Anderson Wesley Wales Anderson nasceu em 1º de maio de 1969, em Houston, Texas. Desde cedo, mostrou interesse por filmes e literatura, o que o levou a estudar filosofia na Universidade do Texas em Austin, onde conheceu Owen Wilson, seu futuro colaborador frequente. A parceria com Wilson foi fundamental para o início da carreira de Anderson. Juntos, escreveram o roteiro de seu primeiro longa-metragem, 'Bottle Rocket' (1996), que também marcou a estreia de Owen Wilson como ator. Embora 'Bottle Rocket' não tenha sido um sucesso comercial, recebeu elogios da crítica, especialmente pela sua direção estilizada e personagens excêntricos. Este filme estabeleceu a base para o estilo único de Anderson, caracterizado por simetria visual, paleta de cores vibrantes, cenários meticulosamente detalhados e uma narrativa que mistura humor e melancolia.</p><p>O Estilo Inconfundível de Anderson. O estilo visual de Wes Anderson é um dos aspectos mais discutidos e apreciados de sua obra. Sua abordagem estética é tão distintiva que pode ser reconhecida instantaneamente, mesmo por aqueles que não estão familiarizados com todos os seus filmes. Os elementos que definem o estilo Anderson incluem: </p> <p>Simetria e Composição Anderson é conhecido por sua obsessão com a simetria. Suas cenas são cuidadosamente compostas, com o objeto ou personagem principal frequentemente centralizado. Essa técnica não só cria uma sensação de equilíbrio visual, mas também contribui para o humor e a estranheza que permeiam seus filmes.</p>  <p>Paleta de Cores. Cada filme de Anderson possui uma paleta de cores específica que ajuda a definir o seu tom e atmosfera. Ele usa cores vibrantes e contrastantes para criar um visual único e memorável. Por exemplo, em Os Excêntricos Tenenbaums (2001), tons de rosa, vermelho e amarelo dominam a tela, enquanto Moonrise Kingdom (2012) é caracterizado por verdes e amarelos suaves, evocando uma sensação de nostalgia e inocência.</p><p>Wes Anderson, um dos cineastas mais singulares e inovadores de Hollywood, transformou-se em um verdadeiro fenômeno nas redes sociais. Seu estilo visual inconfundível, narrativa peculiar e a habilidade de criar universos cinematográficos únicos conquistaram tanto críticos quanto o público em geral. Com uma carreira que abrange mais de duas décadas, Anderson não apenas redefiniu o cinema independente, mas também se tornou um ícone da cultura pop contemporânea. Este artigo explora a trajetória, o estilo e o impacto de Wes Anderson, além de analisar como ele se tornou uma trend nas redes sociais.</p><p>A Ascensão de Wes Anderson Wesley Wales Anderson nasceu em 1º de maio de 1969, em Houston, Texas. Desde cedo, mostrou interesse por filmes e literatura, o que o levou a estudar filosofia na Universidade do Texas em Austin, onde conheceu Owen Wilson, seu futuro colaborador frequente. A parceria com Wilson foi fundamental para o início da carreira de Anderson. Juntos, escreveram o roteiro de seu primeiro longa-metragem, 'Bottle Rocket' (1996), que também marcou a estreia de Owen Wilson como ator. Embora 'Bottle Rocket' não tenha sido um sucesso comercial, recebeu elogios da crítica, especialmente pela sua direção estilizada e personagens excêntricos. Este filme estabeleceu a base para o estilo único de Anderson, caracterizado por simetria visual, paleta de cores vibrantes, cenários meticulosamente detalhados e uma narrativa que mistura humor e melancolia.</p><p>O Estilo Inconfundível de Anderson. O estilo visual de Wes Anderson é um dos aspectos mais discutidos e apreciados de sua obra. Sua abordagem estética é tão distintiva que pode ser reconhecida instantaneamente, mesmo por aqueles que não estão familiarizados com todos os seus filmes. Os elementos que definem o estilo Anderson incluem: </p> <p>Simetria e Composição Anderson é conhecido por sua obsessão com a simetria. Suas cenas são cuidadosamente compostas, com o objeto ou personagem principal frequentemente centralizado. Essa técnica não só cria uma sensação de equilíbrio visual, mas também contribui para o humor e a estranheza que permeiam seus filmes.</p>  <p>Paleta de Cores. Cada filme de Anderson possui uma paleta de cores específica que ajuda a definir o seu tom e atmosfera. Ele usa cores vibrantes e contrastantes para criar um visual único e memorável. Por exemplo, em Os Excêntricos Tenenbaums (2001), tons de rosa, vermelho e amarelo dominam a tela, enquanto Moonrise Kingdom (2012) é caracterizado por verdes e amarelos suaves, evocando uma sensação de nostalgia e inocência.</p><p>Wes Anderson, um dos cineastas mais singulares e inovadores de Hollywood, transformou-se em um verdadeiro fenômeno nas redes sociais. Seu estilo visual inconfundível, narrativa peculiar e a habilidade de criar universos cinematográficos únicos conquistaram tanto críticos quanto o público em geral. Com uma carreira que abrange mais de duas décadas, Anderson não apenas redefiniu o cinema independente, mas também se tornou um ícone da cultura pop contemporânea. Este artigo explora a trajetória, o estilo e o impacto de Wes Anderson, além de analisar como ele se tornou uma trend nas redes sociais.</p><p>A Ascensão de Wes Anderson Wesley Wales Anderson nasceu em 1º de maio de 1969, em Houston, Texas. Desde cedo, mostrou interesse por filmes e literatura, o que o levou a estudar filosofia na Universidade do Texas em Austin, onde conheceu Owen Wilson, seu futuro colaborador frequente. A parceria com Wilson foi fundamental para o início da carreira de Anderson. Juntos, escreveram o roteiro de seu primeiro longa-metragem, 'Bottle Rocket' (1996), que também marcou a estreia de Owen Wilson como ator. Embora 'Bottle Rocket' não tenha sido um sucesso comercial, recebeu elogios da crítica, especialmente pela sua direção estilizada e personagens excêntricos. Este filme estabeleceu a base para o estilo único de Anderson, caracterizado por simetria visual, paleta de cores vibrantes, cenários meticulosamente detalhados e uma narrativa que mistura humor e melancolia.</p><p>O Estilo Inconfundível de Anderson. O estilo visual de Wes Anderson é um dos aspectos mais discutidos e apreciados de sua obra. Sua abordagem estética é tão distintiva que pode ser reconhecida instantaneamente, mesmo por aqueles que não estão familiarizados com todos os seus filmes. Os elementos que definem o estilo Anderson incluem: </p> <p>Simetria e Composição Anderson é conhecido por sua obsessão com a simetria. Suas cenas são cuidadosamente compostas, com o objeto ou personagem principal frequentemente centralizado. Essa técnica não só cria uma sensação de equilíbrio visual, mas também contribui para o humor e a estranheza que permeiam seus filmes.</p>  <p>Paleta de Cores. Cada filme de Anderson possui uma paleta de cores específica que ajuda a definir o seu tom e atmosfera. Ele usa cores vibrantes e contrastantes para criar um visual único e memorável. Por exemplo, em Os Excêntricos Tenenbaums (2001), tons de rosa, vermelho e amarelo dominam a tela, enquanto Moonrise Kingdom (2012) é caracterizado por verdes e amarelos suaves, evocando uma sensação de nostalgia e inocência.</p><p>Wes Anderson, um dos cineastas mais singulares e inovadores de Hollywood, transformou-se em um verdadeiro fenômeno nas redes sociais. Seu estilo visual inconfundível, narrativa peculiar e a habilidade de criar universos cinematográficos únicos conquistaram tanto críticos quanto o público em geral. Com uma carreira que abrange mais de duas décadas, Anderson não apenas redefiniu o cinema independente, mas também se tornou um ícone da cultura pop contemporânea. Este artigo explora a trajetória, o estilo e o impacto de Wes Anderson, além de analisar como ele se tornou uma trend nas redes sociais.</p><p>A Ascensão de Wes Anderson Wesley Wales Anderson nasceu em 1º de maio de 1969, em Houston, Texas. Desde cedo, mostrou interesse por filmes e literatura, o que o levou a estudar filosofia na Universidade do Texas em Austin, onde conheceu Owen Wilson, seu futuro colaborador frequente. A parceria com Wilson foi fundamental para o início da carreira de Anderson. Juntos, escreveram o roteiro de seu primeiro longa-metragem, 'Bottle Rocket' (1996), que também marcou a estreia de Owen Wilson como ator. Embora 'Bottle Rocket' não tenha sido um sucesso comercial, recebeu elogios da crítica, especialmente pela sua direção estilizada e personagens excêntricos. Este filme estabeleceu a base para o estilo único de Anderson, caracterizado por simetria visual, paleta de cores vibrantes, cenários meticulosamente detalhados e uma narrativa que mistura humor e melancolia.</p><p>O Estilo Inconfundível de Anderson. O estilo visual de Wes Anderson é um dos aspectos mais discutidos e apreciados de sua obra. Sua abordagem estética é tão distintiva que pode ser reconhecida instantaneamente, mesmo por aqueles que não estão familiarizados com todos os seus filmes. Os elementos que definem o estilo Anderson incluem: </p> <p>Simetria e Composição Anderson é conhecido por sua obsessão com a simetria. Suas cenas são cuidadosamente compostas, com o objeto ou personagem principal frequentemente centralizado. Essa técnica não só cria uma sensação de equilíbrio visual, mas também contribui para o humor e a estranheza que permeiam seus filmes.</p>  <p>Paleta de Cores. Cada filme de Anderson possui uma paleta de cores específica que ajuda a definir o seu tom e atmosfera. Ele usa cores vibrantes e contrastantes para criar um visual único e memorável. Por exemplo, em Os Excêntricos Tenenbaums (2001), tons de rosa, vermelho e amarelo dominam a tela, enquanto Moonrise Kingdom (2012) é caracterizado por verdes e amarelos suaves, evocando uma sensação de nostalgia e inocência.</p>"

let texto1= "Abchsahdbah Wes Anderson’s style is one of the most distinctive in contemporary cinema. So much so that viewers can recognise his work from a single image, whether it’s animation or live-action. While vintage flair, bold colour scheme and keen costume design are obvious components of this unique aesthetic, there are numerous subtle ways he creates his distinctive look. And it’s not all visual. The style of this singular auteur also evinces a particular warmth"
let texto2 = "Só para ver onde isto vai ter";
//let distancia = 1; // Distância entre os textos
let alturaTexto;
////////////////
var hs1, hs2;
//let paragraphs = [];
let spacing=0;

//import fetchApi from "./js/components/fetch.js";
let newsData;
const NEWS_URL = 'https://api.cosmicjs.com/v3/buckets/dg-project-production/objects?pretty=true&query=%7B%22type%22:%22news%22%7D&limit=10&read_key=U9g6uup9S8xDoSCPis9MuJuIoiWdhErYhdK04nWsXKbaZkVWIY&depth=1&props=slug,title,metadata,id,';

//let text;
let w = 1280;
let h =720;
let boxWidth = 100;
let boxHeight = h;
let x = w/2 - boxWidth*0.5;
let y = h/2 - boxHeight*0.5;
let letterSize = 16;
let letterHeight = letterSize + 4;
let particles;
//let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

let aux = true;
//let text ;
let index, index2; 
let fonts = []; 
let fonts2 = []; 
let randomBezier;
let s=50; //define a escala
let n=0;
let dir=1;
let points;
let mic;

function setup() {
  createCanvas(1280, 720);
  mic = new p5.AudioIn()
  mic.start();
  
  grid = new Grid();
  gridColor=color(255,0,0);
  old_english = loadFont('assets/fonts/old_english/Monotype_Old_English_Text_W01.ttf');
  times = loadFont('assets/fonts/times/Times New Roman.ttf');
  roboto = loadFont('assets/fonts/roboto/Roboto-Regular.ttf');
  //let text = new TextBox(str, x, y, boxWidth, boxHeight, letterHeight, letterSize);
  //particles = text.getWordParticles();
  //fonts = [old_english, times, roboto];
  fonts = ["Roboto", "Futura", "Courier New", "Montserrat", "Didot"];
  index = round(random(0, fonts.length-1));
  index2 = round(random(0, fonts.length-1));
  
  hs2 = new WScrollbar(width-16, 0, 16, height, 16);
  randomBezier = new RandomBezier();
}

function draw() {
  background('#fee7de');
  micLevel = mic.getLevel();
  console.log("mic: " + micLevel)

  translate(0,0);
  fill(255, 0, 0);

  hs2.update();
  hs2.display();
  fill(0);
  
  rect(100,-img2Pos,100,height/2);
  
  var img2Pos = hs2.getPos();
  push();
  translate(0,-img2Pos);

  //grid.gridDisplay(gridColor);

  if (dir == 1 && n < 100) n++;
  if (n == 100 || n == 0) {dir = -1 * dir;}
  if (dir == -1 && n <= 100) n--;

  color(0);
  //grid.textGrid("texto", "nível texto", "fonte",fromx, tox, fromy, -3);
  grid.titleGrid("WA", "n3", fonts[index], 0, 1, 0, -3);
  grid.titleGrid("5 de maio de 2024", "n3", fonts[index], 3, 5, 0, -3);
  grid.titleGrid("nº4", "n3", fonts[index], 7, 8, 0, -3);
  grid.titleGrid("Wes Anderson Times", "n1", fonts[index], 0, 8, 3, -3);
  grid.titleGrid("Quem é Wes Anderson?","h1", fonts[index2], 0, 8, 10, -3);
  grid.titleGrid("Conheça o cineasta que virou trend nas redes sociais","h2", fonts[index2], 2, 6, 14, -3);

  grid.lineGrid(0,8,9,9); //xxyy

  grid.lineGrid(0,8,2,2); //xxyy y+1


  //renderTextInColumns(content, size, font, fromx, startY, columnHeight, startLines, columnHeights);

  //let randomBezier;
if(aux){
  grid.renderTextInColumns(textocosmic, 'h3', 'roboto', 0, 15, 800);

  //for(let i=0; i<grid.info.lenght())
  //console.log("w: "+grid.info[0]["w"])
  let col=4;
  console.log(grid.info[0]);
 //randomBezier = new RandomBezier(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight);
 randomBezier.randomBezierCurve(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight)
  let text = new TextBox(grid.info[0]["text"], grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight, letterHeight, letterSize);
  //let text = new TextBox(str, grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight, letterHeight, letterSize);
  particles = text.getWordParticles();

  
  
  
  let text2 = new TextBox(grid.info[1]["text"], grid.info[1]["x"],grid.info[1]["y"], grid.info[1]["width"], boxHeight, letterHeight, letterSize);
  //let text = new TextBox(str, grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight, letterHeight, letterSize);
  particles2 = text2.getWordParticles();
  aux=false;

  console.log(randomBezier);
let dic = randomBezier.randomBezierCurve(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight)
console.log(dic);

  points = randomBezier.getPoints([dic["x1"], dic["x2"], dic["x3"], dic["x4"]], [dic["y1"], dic["y2"], dic["y3"], dic["y4"]]);
  console.log(points);
}


  particles.forEach(particle => {
    particle.update(points[n][0] * (micLevel * s), points[n][1] * (micLevel * s));
    particle.draw();
  })

  /*particles2.forEach(particle => {
    particle.update(points[n][0] * (micLevel * s), points[n][1] * (micLevel * s));
    particle.draw();
  })*/
pop();
  //circle(grid.info[0]["x"], grid.info[0]["y"], grid.info[0]["width"])
//codigo bom
/*let alturasTexto = [];
let posIni = [];
posIni[0]=14;

for (let i = 0; i < paragraphs.length; i++) {
    let alturaTexto = grid.textHeight(paragraphs[i], "h3", 2);
    alturasTexto.push(alturaTexto);

	if (i >= 1) {
        posIni[i] = posIni[i-1] + alturasTexto[i-1];
		grid.textGrid(paragraphs[i], "h3", "roboto", 0, 2, posIni[i] + (i + 1), -3);
		//grid.renderTextInColumns(paragraphs[i], 'h3', 'roboto', 0, posIni[i] + (i + 1), 900);
    }else{
		grid.textGrid(paragraphs[i], "h3", "roboto", 0, 2, posIni[i], -3);
		//grid.renderTextInColumns(paragraphs[i], 'h3', 'roboto', 0, posIni[i], 900);
	}
}*/

}