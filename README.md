# PSC-DM calculator (V2)

This is a small, static clinical information site built with plain HTML, CSS, and JavaScript. It estimates the probability of primary sclerosing cholangitis (PSC) in adults with sclerosing cholangitis. The site has a calculator, information about the model and its clinical use, patient resources, and research references. English is the default language; visitors can switch to Italian, and that preference is saved in their browser.

## How the calculator works

The form asks for age at diagnosis (18–100 years) and five yes/no features: inflammatory bowel disease, previous hepato-pancreato-biliary surgery, other autoimmune comorbidities, family history of autoimmune disease, and pancreatic abnormalities on MRI or CT. It calculates the PSC-DM score using the coefficients shown in the Informations tab, then applies the logistic function to display a probability to one decimal place. The interpretation uses a 0.50 threshold. Reset clears the form and result.

The calculation and form data stay in the browser; the site has no server-side calculation or patient-data storage. Only the chosen language is saved in browser local storage. The external patient-resource, research, and LinkedIn links take visitors to other sites with their own privacy practices.

## Clinical scope and sources

The estimate supports clinical assessment and is not a standalone diagnosis or treatment recommendation. Atypical or conflicting findings need specialist review and investigation for secondary causes. The References tab links to the PSC-DM research record and the EASL and AASLD guidance. The final journal citation for the PSC-DM study is marked as pending in the site; this repository does not independently validate the published model or its performance.

## Files and accessibility

- `index.html` contains the page structure, content, metadata, and reference links.
- `style.css` contains the responsive layout, focus styles, and tooltips.
- `script.js` contains translations, tab behavior, the calculator, and reset handling.

The tabs support keyboard arrows, Home, and End; help icons reveal explanations on hover or keyboard focus. The layout includes a narrow-screen breakpoint, but a visual mobile-browser test was not completed in this workspace.
