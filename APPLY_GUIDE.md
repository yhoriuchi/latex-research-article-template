# Apply the LaTeX Research Article Guide to an Existing Project

Inspect the entire existing LaTeX/Overleaf project before making changes. Apply the rules and styles described below to the existing manuscript while preserving its substantive content, citations, bibliography records, project-specific commands, journal requirements, and working compilation infrastructure.

## Operating principles

1. Preserve the existing manuscript. Do not replace the project with a new template, overwrite substantive prose, discard custom commands, or broadly rename files or citation keys.
2. Learn the current structure first. Identify the main `.tex` file, preamble, title page, section files, appendices, bibliographies, figures, tables, compilation engine, and any journal class or style requirements.
3. Treat the user's latest instructions and the target journal's requirements as authoritative. Apply this guide only where compatible, and explain any rule that cannot safely be applied.
4. Make focused, reviewable changes. Prefer adapting existing files over unnecessary restructuring. Do not commit, push, publish, or synchronize unless explicitly requested.

## Manuscript structure

- Keep the title page, main text, references, and supplementary materials modular when the project permits it.
- Give every `\section{}` and `\subsection{}` a label immediately after the heading. Use `sec:` for main-text labels and `app:` for appendix labels.
- Put each figure and table in its own modular `.tex` file.
- Keep every figure PDF and its LaTeX wrapper together in one `figures/` directory with the same filename stem.
- Derive figure labels from the shared filename stem by lowercasing it and removing underscores, hyphens, spaces, punctuation, and special characters. Use `fig:` for figures and `tab:` for tables.

## Typography and prose

- Use `microtype` when compatible with the document class and compiler.
- Write the United States abbreviation as `U.S.\ ` within a sentence.
- Keep named elements with their numbers using a nonbreaking space: `Figure~\ref{}`, `Table~\ref{}`, `Section~\ref{}`, `Appendix~\ref{}`, and `Equation~\eqref{}`.
- Use `12--18` for numeric ranges, `word---word` for an em dash, LaTeX opening and closing quotation marks, and math mode for mathematical minus signs.
- Use `\emph{}` for semantic emphasis. Reserve `\textit{}` for titles or terms that specifically require italics. Avoid decorative underlining and boldface in ordinary prose.
- Avoid manual layout commands such as `\\`, `\newline`, `\hspace`, and negative `\vspace` in ordinary prose unless a specific verified layout requires them.
- Treat displayed equations as grammatical parts of their sentences. Punctuate them, label every equation cited later with `eq:`, and refer to it as `Equation~\eqref{eq:name}`.

## Figures and tables

- Place figures at the top of a page with `[!t]` by default.
- In an appendix only, use `[!h]` when a figure immediately follows a section or subsection heading and has no associated prose before it.
- Put `\label{}` immediately after `\caption{}` inside each modular float.
- Put figure captions below figures and table captions above tables.
- Keep captions concise. Put definitions, coding details, uncertainty information, and extended methodological explanations in notes.
- Use `width=\textwidth` for figures unless their dimensions or typography make full width clearly inappropriate.
- Design figure text to remain approximately the same size as, or only slightly smaller than, manuscript text at final inclusion size.
- Keep publication titles and methodological subtitles in the LaTeX caption, not inside the plotted graphic.
- Prefer vector PDF figures.
- Avoid legends where direct labels, axis labels, facet headings, or integrated annotations communicate the information clearly.
- Insert each modular float immediately after its first textual reference, on the same source line, with no intervening whitespace:

```tex
... (see Figure~\ref{fig:sample}).\input{figures/sample.tex} The paragraph continues here.
```

- Every standalone figure file must begin immediately with `\begin{figure}` and end with `\end{figure}%`. Every standalone table file must begin immediately with `\begin{table}` and end with `\end{table}%`. Do not leave comments, spaces, or blank lines outside those boundaries.
- Use `\FloatBarrier` only at a substantively important boundary when floats would otherwise cross into the wrong section.

## Citations and bibliography

- Preserve the project's citation and bibliography configuration unless the user or target journal requires a change.
- Preserve citation keys and nonduplicate bibliography entries unless explicitly asked to change them.
- For possessive author-year constructions, use a project helper equivalent to `\cites{key}` when available instead of writing `\citet{key}'s`.
- Keep `cleveref` disabled unless the project already depends on it or the user explicitly prefers it; use explicit reference wording by default.

## Supplementary materials

- Apply the same modular-file, filename, label, first-reference, and typography rules to appendix figures and tables.
- Keep supplementary materials single-spaced, including appendix footnotes, unless journal requirements differ.
- When compatible with the project, use appendix page labels A1, A2, and so forth; alphabetical appendix sections; section-based float numbers such as A.1 and B.1; an appendix-only contents hierarchy; and a separate appendix bibliography.
- Preserve a working appendix system rather than replacing it mechanically. If the project does not already have one, prefer the `appendix` and `minitoc` approach demonstrated in the public template when compatible.

## Word count and blind review

- Preserve any working word-count method. If none exists and the environment supports it, add automatic TeXcount generation through `latexmkrc` and exclude the title page, references, and appendix with explicit `%TC:ignore` blocks.
- The reference template runs TeXcount through the `$pdflatex` rule in `latexmkrc`. Therefore, automatic word-count regeneration requires **pdfLaTeX** as the selected Overleaf compiler when using that file unchanged. Confirm the compiler under **Menu → Settings → Compiler → pdfLaTeX**.
- Do not silently switch an existing project away from LuaLaTeX or XeLaTeX when it depends on that engine. Instead, preserve the required engine and add the equivalent TeXcount command to the corresponding `$lualatex` or `$xelatex` rule, then verify that `wordcount.tex` is regenerated during an ordinary build.
- Preserve or add a simple blind-review switch when useful, but do not expose identifying information in a blind build.

## Verification

After substantive changes:

1. Compile the actual main document with its established build command; use `latexmk main.tex` when that is the project's convention.
2. Require no LaTeX errors, undefined citations or references, duplicate labels, or overfull boxes.
3. Inspect underfull-box warnings when they correspond to visible spacing defects.
4. Visually inspect the compiled PDF after changes affecting figures, tables, spacing, pagination, or section structure.
5. Verify float placement, manuscript margins, page composition, references, word-count exclusions, blind-review behavior, and supplementary-materials numbering and contents when applicable.
6. Report the files changed, commands run, verification results, any deviations from this guide, and any unresolved journal- or project-specific questions.
