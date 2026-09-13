const form = document.getElementById("pscForm");
const result = document.getElementById("result");
const probabilityEl = document.getElementById("probability");
const interpretationEl = document.getElementById("interpretation");
const resetBtn = document.getElementById("resetBtn");

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
    interpretationEl.textContent =
      "Using the prespecified 0.50 threshold, this result falls in the PSC-predicted range. Interpret alongside the full clinical assessment.";
  } else {
    interpretationEl.textContent =
      "Using the prespecified 0.50 threshold, this result falls below the PSC-predicted range. Consider secondary causes and interpret alongside the full clinical assessment.";
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
