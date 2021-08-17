let quadroMedalhas = document.querySelector(".quadro-medalhas");

function criarTemplateLinha(
  colocacao,
  country,
  flag_url,
  medal_gold,
  medal_silver,
  medal_bronze
) {
  let linha = document.createElement("div");
  linha.classList.add("linha");
  let coluna_rank = criaColuna_rank(`${colocacao}º`);
  let coluna_country = criaColuna_country(country, flag_url);
  let gold = criaMedal_gold(medal_gold);
  let silver = criaMedal_silver(medal_silver);
  let bronze = criaMedal_bronze(medal_bronze);
  let total = criaMedalTotal(medal_gold + medal_silver + medal_bronze);
  linha.appendChild(coluna_rank);
  linha.appendChild(coluna_country);
  linha.appendChild(gold);
  linha.appendChild(silver);
  linha.appendChild(bronze);
  linha.appendChild(total);
  quadroMedalhas.appendChild(linha);
}

function tratarDadosMedalhas(ArrayPaises) {
  let paisesOrdenados = ordenarPaises(ArrayPaises);
  for (let i = 0; i < paisesOrdenados.length; i++) {
    let pais = paisesOrdenados[i];
    criarTemplateLinha(
      i + 1,
      pais.country,
      pais.flag_url,
      pais.medal_gold,
      pais.medal_silver,
      pais.medal_bronze
    );
  }
}

function ordenarPaises(ArrayPaises) {
  let newArrayPaises = ArrayPaises.map(somarTotal).sort(
    (a, b) => b.medal_gold - a.medal_gold
  );
  return newArrayPaises;
}

function somarTotal(pais) {
  return pais;
}

function criaColuna_rank(rank) {
  let coluna_rank = document.createElement("div");
  coluna_rank.classList.add("coluna", "coluna-rank");
  let coluna_rank_titulo = document.createElement("span");
  coluna_rank_titulo.innerText = rank;
  coluna_rank.appendChild(coluna_rank_titulo);
  return coluna_rank;
}
function criaColuna_country(country, urlimagem) {
  let coluna_country = document.createElement("div");
  coluna_country.classList.add("coluna", "coluna-country");

  let coluna_country_titulo = document.createElement("span");
  coluna_country_titulo.innerText = country;

  let coluna_country_imagem = document.createElement("img");
  coluna_country_imagem.src = urlimagem;
  coluna_country_imagem.alt = country;
  coluna_country.appendChild(coluna_country_imagem);

  coluna_country.appendChild(coluna_country_titulo);
  return coluna_country;
}
function criaMedal_gold(gold) {
  let coluna = document.createElement("div");
  coluna.classList.add("coluna", "medal_gold");
  let coluna_titulo = document.createElement("span");
  coluna_titulo.innerText = gold;
  coluna.appendChild(coluna_titulo);
  return coluna;
}
function criaMedal_silver(silver) {
  let coluna = document.createElement("div");
  coluna.classList.add("coluna", "medal_silver");
  let coluna_titulo = document.createElement("span");
  coluna_titulo.innerText = silver;
  coluna.appendChild(coluna_titulo);
  return coluna;
}
function criaMedal_bronze(bronze) {
  let coluna = document.createElement("div");
  coluna.classList.add("coluna", "medal_bronze");
  let coluna_titulo = document.createElement("span");
  coluna_titulo.innerText = bronze;
  coluna.appendChild(coluna_titulo);
  return coluna;
}
function criaMedalTotal(total) {
  let coluna_total = document.createElement("div");
  coluna_total.classList.add("coluna", "total");
  let coluna_total_titulo = document.createElement("span");
  coluna_total_titulo.innerText = total;
  coluna_total.appendChild(coluna_total_titulo);
  return coluna_total;
}
