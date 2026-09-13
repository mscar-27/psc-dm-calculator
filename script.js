const form = document.getElementById("pscForm");
const result = document.getElementById("result");
const probabilityEl = document.getElementById("probability");
const interpretationEl = document.getElementById("interpretation");
const resetBtn = document.getElementById("resetBtn");
const languageSelect = document.getElementById("language");
const tabs = [...document.querySelectorAll('[role="tab"]')];
const copy = {
  en: {
    skip:"Skip to content", languageLabel:"Language", eyebrow:"Clinical prediction model", subtitle:"A clinical calculator to estimate the probability of primary sclerosing cholangitis (PSC) in adults with sclerosing cholangitis.", tabsLabel:"PSC-DM sections", tabCalculator:"Calculator", tabInformation:"Informations", tabReferences:"References", calculateTitle:"Calculate PSC probability", intro:"Enter the clinical features available at diagnosis or first specialist assessment.", age:"Age at diagnosis", years:"years", ibd:"Inflammatory bowel disease (IBD)", surgery:"Previous hepato-pancreato-biliary surgery", autoimmune:"Other autoimmune comorbidities", family:"Family history of autoimmune disease", pancreas:"Pancreatic abnormalities on MRI or CT", yes:"Yes", no:"No", reset:"Reset", calculate:"Calculate", resultLabel:"Predicted probability of PSC", ageHelp:"Age in completed years when sclerosing cholangitis was diagnosed.", ibdHelp:"Select Yes if the patient has inflammatory bowel disease, including ulcerative colitis or Crohn’s disease.", surgeryHelp:"Select Yes for surgery involving the liver, pancreas, or bile ducts before assessment.", autoimmuneHelp:"Select Yes for a diagnosed autoimmune condition other than inflammatory bowel disease.", familyHelp:"Select Yes if an autoimmune disease is known in the patient's family.", pancreasHelp:"Select Yes if MRI or CT reported a pancreatic abnormality.", aboutTitle:"About PSC-DM", aboutText:"PSC-DM combines six routinely available clinical variables: age at diagnosis, IBD, previous hepato-pancreato-biliary surgery, other autoimmune comorbidities, family history of autoimmune disease, and pancreatic abnormalities.", equation:"PSC-DM = 6.6417 − 0.1212×Age + 4.9673×IBD − 2.5868×Surgery + 2.2197×Autoimmunity + 2.3572×Family history − 2.5001×Pancreas", probabilityEquation:"Probability of PSC = exp(PSC-DM) / [1 + exp(PSC-DM)]", clinicalTitle:"Clinical use", clinicalText:"PSC-DM is provided for informational purposes only and should not be used as a standalone tool for diagnosis or treatment decisions. It is intended to support clinical judgement. Atypical or discordant presentations should prompt specialist review and appropriate investigation for secondary causes of sclerosing cholangitis.", privacy:"All calculations run locally in your browser. This website does not transmit or store patient information.", patientTitle:"Patient information", patientText:"For patients and relatives of those with PSC, further information is available from:", english:"English", italian:"Italian", referencesTitle:"References", derivedIn:"PSC-DM uses the equation derived in:", citationPending:"Final journal citation to be added when available.", referAlso:"Please refer also to:", disclaimer:"For research and clinical decision-support purposes. Not a substitute for specialist assessment.", credit:"Created by Miki Scaravaglio", high:"Using the prespecified 0.50 threshold, this result falls in the PSC-predicted range. Interpret alongside the full clinical assessment.", low:"Using the prespecified 0.50 threshold, this result falls below the PSC-predicted range. Consider secondary causes and interpret alongside the full clinical assessment.", title:"PSC-DM | Primary Sclerosing Cholangitis Calculator", description:"PSC-DM calculator: estimate the probability of primary sclerosing cholangitis using six clinical features."
  },
  it: {
    skip:"Vai al contenuto", languageLabel:"Lingua", eyebrow:"Modello di previsione clinica", subtitle:"Un calcolatore clinico per stimare la probabilità di colangite sclerosante primitiva (PSC) negli adulti con colangite sclerosante.", tabsLabel:"Sezioni PSC-DM", tabCalculator:"Calcolatore", tabInformation:"Informazioni", tabReferences:"Riferimenti", calculateTitle:"Calcola la probabilità di PSC", intro:"Inserisci le caratteristiche cliniche disponibili alla diagnosi o alla prima valutazione specialistica.", age:"Età alla diagnosi", years:"anni", ibd:"Malattia infiammatoria intestinale (IBD)", surgery:"Precedente chirurgia epato-pancreato-biliare", autoimmune:"Altre patologie autoimmuni", family:"Familiarità per malattie autoimmuni", pancreas:"Anomalie pancreatiche alla RM o alla TC", yes:"Sì", no:"No", reset:"Reimposta", calculate:"Calcola", resultLabel:"Probabilità stimata di PSC", ageHelp:"Età in anni compiuti al momento della diagnosi di colangite sclerosante.", ibdHelp:"Seleziona Sì se è stata diagnosticata una malattia infiammatoria intestinale, inclusa la colite ulcerosa o la malattia di Crohn.", surgeryHelp:"Seleziona Sì per interventi al fegato, al pancreas o alle vie biliari precedenti alla valutazione.", autoimmuneHelp:"Seleziona Sì per una patologia autoimmune diagnosticata diversa dalla malattia infiammatoria intestinale.", familyHelp:"Seleziona Sì se è nota una malattia autoimmune in famiglia.", pancreasHelp:"Seleziona Sì se la RM o la TC ha rilevato un'anomalia pancreatica.", aboutTitle:"Informazioni su PSC-DM", aboutText:"PSC-DM combina sei variabili cliniche comunemente disponibili: età alla diagnosi, IBD, precedente chirurgia epato-pancreato-biliare, altre patologie autoimmuni, familiarità per malattie autoimmuni e anomalie pancreatiche.", equation:"PSC-DM = 6.6417 − 0.1212×Età + 4.9673×IBD − 2.5868×Chirurgia + 2.2197×Autoimmunità + 2.3572×Familiarità − 2.5001×Pancreas", probabilityEquation:"Probabilità di PSC = exp(PSC-DM) / [1 + exp(PSC-DM)]", clinicalTitle:"Uso clinico", clinicalText:"PSC-DM è fornito esclusivamente a scopo informativo e non deve essere usato da solo per la diagnosi o le decisioni terapeutiche. È destinato a supportare il giudizio clinico. Presentazioni atipiche o discordanti richiedono una valutazione specialistica e indagini appropriate sulle cause secondarie di colangite sclerosante.", privacy:"Tutti i calcoli avvengono localmente nel browser. Questo sito non trasmette né conserva i dati del paziente.", patientTitle:"Informazioni per i pazienti", patientText:"Per i pazienti con PSC e i loro familiari, ulteriori informazioni sono disponibili presso:", english:"inglese", italian:"italiano", referencesTitle:"Riferimenti", derivedIn:"PSC-DM utilizza l'equazione derivata in:", citationPending:"La citazione definitiva della rivista sarà aggiunta quando disponibile.", referAlso:"Consulta anche:", disclaimer:"Per ricerca e supporto alle decisioni cliniche. Non sostituisce una valutazione specialistica.", credit:"Creato da Miki Scaravaglio", high:"Con la soglia prestabilita di 0,50, il risultato rientra nell'intervallo predittivo della PSC. Interpretare nel contesto della valutazione clinica completa.", low:"Con la soglia prestabilita di 0,50, il risultato è inferiore all'intervallo predittivo della PSC. Considerare cause secondarie e interpretare nel contesto della valutazione clinica completa.", title:"PSC-DM | Calcolatore per la colangite sclerosante primitiva", description:"Calcolatore PSC-DM: stima la probabilità di colangite sclerosante primitiva con sei caratteristiche cliniche."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  languageSelect.value = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = copy[lang][el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", copy[lang][el.dataset.i18nAria]); });
  document.querySelectorAll(".radio-row").forEach(row => { row.querySelectorAll("span").forEach(span => { span.textContent = copy[lang][span.dataset.i18n]; }); });
  document.querySelectorAll(".info-button").forEach(button => { button.setAttribute("aria-label", (lang === "it" ? "Informazioni: " : "About: ") + copy[lang][button.dataset.info]); });
  document.title = copy[lang].title;
  document.querySelector('meta[name="description"]').content = copy[lang].description;
  document.querySelector('meta[property="og:title"]').content = copy[lang].title;
  document.querySelector('meta[property="og:description"]').content = copy[lang].description;
  if (!result.classList.contains("hidden")) interpretationEl.textContent = copy[lang][Number(probabilityEl.textContent.replace("%", "")) >= 50 ? "high" : "low"];
  try { localStorage.setItem("pscLanguage", lang); } catch (_) {}
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
let initialLanguage = "en";
try { initialLanguage = localStorage.getItem("pscLanguage") || "en"; } catch (_) {}
setLanguage(copy[initialLanguage] ? initialLanguage : "en");

function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden = !active;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", event => {
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : null;
    if (next !== null) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});

function getRadioValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? Number(selected.value) : null;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const age = Number(document.getElementById("age").value);
  const ibd = getRadioValue("ibd");
  const surgery = getRadioValue("surgery");
  const autoimmune = getRadioValue("autoimmune");
  const family = getRadioValue("family");
  const pancreas = getRadioValue("pancreas");

  if ([age, ibd, surgery, autoimmune, family, pancreas].some(v => v === null || Number.isNaN(v))) {
    return;
  }

  const score =
    6.6417
    - 0.1212 * age
    + 4.9673 * ibd
    - 2.5868 * surgery
    + 2.2197 * autoimmune
    + 2.3572 * family
    - 2.5001 * pancreas;

  const probability = 1 / (1 + Math.exp(-score));
  const percent = probability * 100;

  probabilityEl.textContent = `${percent.toFixed(1)}%`;

  if (probability >= 0.5) {
    interpretationEl.textContent = copy[languageSelect.value].high;
  } else {
    interpretationEl.textContent = copy[languageSelect.value].low;
  }

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

resetBtn.addEventListener("click", () => {
  form.reset();
  result.classList.add("hidden");
  probabilityEl.textContent = "—";
  interpretationEl.textContent = "";
});
