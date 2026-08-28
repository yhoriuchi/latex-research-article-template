# Agent Instructions for Yusaku's Research Article Template

These instructions apply to all work in this template. The user's latest explicit instruction takes precedence over this file. Preserve existing behavior unless the user asks to change it.

## Project Purpose

This repository is Yusaku Horiuchi's reusable LaTeX template for research articles. Keep it generic, readable, easy to adapt, and compatible with both local `latexmk` compilation and Overleaf.

## Confirmed Defaults

- Compile `main.tex` with `latexmk main.tex`.
- Keep the title page, main sections, references, and supplementary materials in their existing modular files.
- Preserve the manuscript's current citation and bibliography configuration unless the user explicitly requests a change.
- Generate the word count automatically with TeXcount through `latexmkrc`.
- Exclude the title page, references, and appendix from the reported word count using the existing `%TC:ignore` blocks in `main.tex`.
- Use a separate appendix bibliography through the existing `multibib` configuration.
- Keep supplementary materials single-spaced, including appendix footnotes.
- Use the `appendix` and `minitoc` packages for the supplementary-materials table of contents.
- Format the supplementary-materials opening page with a centered title and manuscript title, followed by the native `\parttoc` “Table of Contents” layout.
- Use appendix page labels `A1`, `A2`, and so forth.
- Number appendix sections alphabetically. Number tables and figures within appendix sections, such as Table A.1 and Figure B.1.
- Preserve the appendix-only table of contents hierarchy: sections appear as A, B, and so forth; subsections appear as A.1, A.2, and so forth with dotted leaders and page numbers.

## User Preferences to Add or Revise

Add durable, explicitly confirmed preferences below. Do not convert tentative ideas, one-time exceptions, or agent suggestions into permanent rules without user confirmation.

### Manuscript Structure

- Give every `\section{}` and `\subsection{}` a `\label{}` immediately after the heading command.
- Use `sec:` labels for main-text sections and subsections and `app:` labels for appendix sections and subsections.
- Put each figure and table in its own modular `.tex` file rather than writing the float directly inside a manuscript section file.

### Typography and Spacing

- Use the `microtype` package for improved character protrusion, kerning, and line justification.
- Write the United States abbreviation as `U.S.\ ` when it occurs within a sentence so LaTeX treats the period correctly and retains the following interword space.
- Keep every named element together with its number by using LaTeX's nonbreaking space `~` between the descriptor and number. This applies to figures, tables, sections, appendices, equations, hypotheses, propositions, pages, and similar numbered elements.
- Use forms such as `Figure~\ref{fig:sample}`, `Table~\ref{tab:sample}`, `Section~\ref{sec:sample}`, `Appendix~\ref{app:sample}`, and `Equation~\eqref{eq:sample}`. For a hard-coded number, use the same convention, such as `Section~2` or `Table~1`.
- Do not write `Figure\~\ref{...}`: `\~` is LaTeX's tilde-accent command, whereas the unescaped `~` is the nonbreaking space.
- Avoid unintended whitespace around modular floats. Every standalone figure file must begin immediately with `\begin{figure}` and end with `\end{figure}%`. Every standalone table file must begin immediately with `\begin{table}` and end with `\end{table}%`. Do not put comments, spaces, or blank lines before the opening environment or any blank line or other whitespace after the final percent sign.
- Avoid manual layout commands in ordinary prose, especially `\\`, `\newline`, `\hspace`, and negative `\vspace`. Use paragraphs, semantic environments, and document-level spacing settings. Use a manual spacing command only when the specific layout requires it and verify the compiled result.
- Use LaTeX punctuation consistently: `12--18` for numeric ranges, `word---word` for an em dash, and LaTeX opening and closing quotation marks. Put mathematical minus signs in math mode.
- Use `\emph{}` for semantic emphasis. Reserve `\textit{}` for titles, terms, or text that must specifically be italic. Avoid underlining and decorative boldface in ordinary prose.
- Do not impose aggressive global widow or orphan penalties by default because they can create conspicuous white space. Correct a visible widow or orphan locally and recheck the surrounding page composition.

### Tables and Figures

- Place figures at the top of a page with `[!t]` by default.
- Exception: in the appendix, when a figure appears immediately after a section or subsection heading and has no associated prose before it, use `[!h]`.
- Keep each figure in the single `figures/` directory. Do not create separate `figure/` and `figure_tex/` directories.
- For every figure, store the graphic PDF and LaTeX wrapper together in `figures/` with exactly the same filename stem, for example `figures/ATEs_race_by_white.pdf` and `figures/ATEs_race_by_white.tex`.
- Derive a figure label from the shared filename stem by lowercasing it and removing underscores, hyphens, spaces, punctuation, and other special characters. For example, `ATEs_race_by_white.pdf` uses `\label{fig:atesracebywhite}`.
- Use `fig:` for figure labels and `tab:` for table labels.
- Put `\label{}` immediately after `\caption{}` inside the modular figure or table file so references and hyperlinks resolve correctly.
- Put figure captions below figures and table captions above tables. Keep captions concise; place methodological definitions, coding details, uncertainty information, and other extended explanation in figure or table notes.
- Insert each modular float immediately after its first textual reference, not after a `\label{}` in prose. Use this pattern:

```tex
... aaa bbb ccc (see Figure~\ref{fig:sample}).\input{figures/sample.tex} The paragraph continues here.
```

- Keep the first textual reference, period, and `\input{}` on the same source line, with no intervening space or line break, so the surrounding prose can continue as the same paragraph.

- Use `width=\textwidth` for figures by default. Adjust the included width only when the figure's dimensions or typography make full text width clearly inappropriate.
- Design and export figures so their text is approximately the same size as, or slightly smaller than, the manuscript text at final inclusion size. Judge font size after compiling at the intended LaTeX width, not from the standalone graphic preview.
- Do not put publication titles or methodological subtitles inside the plotted graphic; place them in the LaTeX caption.
- Prefer vector PDF figures for LaTeX manuscripts.
- Use `\FloatBarrier` only at a substantively important boundary when floats would otherwise cross into the wrong section. Do not insert it routinely after every section, because forced barriers can create poor page composition.

### Citations and Bibliography

- For possessive author-year constructions, use the template's `\cites{key}` helper instead of writing `\citet{key}'s`.

### Supplementary Materials

- Apply the same modular-file, filename, label, and first-reference rules to appendix figures and tables.
- Use `app:` for both appendix section and appendix subsection labels.
- Use `[!h]` only for the specific appendix exception in which a figure directly follows its section or subsection heading without associated intervening prose; otherwise retain `[!t]`.

### Blind Review and Submission Versions

### Compilation and Output Files

- Require a clean LaTeX build: no errors, undefined citations or references, duplicate labels, or overfull boxes.
- Inspect underfull-box warnings when they correspond to visible spacing defects; do not mechanically suppress warnings that reveal a real layout problem.
- Visually inspect float placement and page composition after changes that affect figures, tables, spacing, pagination, or section structure.
- Keep `cleveref` disabled by default. The explicit forms `Figure~\ref{}`, `Table~\ref{}`, `Section~\ref{}`, `Appendix~\ref{}`, and `Equation~\eqref{}` provide the preferred wording and control. Add `cleveref` only if the user explicitly changes this policy.

## Editing Rules

- Make focused changes and preserve unrelated user edits.
- Prefer modifying the relevant modular file rather than placing extensive content directly in `main.tex`.
- Do not replace bibliography packages, citation styles, or appendix infrastructure without explicit approval.
- Do not rename citation keys broadly or remove nonduplicate bibliography entries unless the user asks.
- Keep generated LaTeX auxiliary files out of version control according to `.gitignore`.
- Do not commit, push, publish, or synchronize changes unless the user explicitly requests it.
- Treat displayed equations as grammatical parts of their surrounding sentences and punctuate them accordingly. Give every equation referenced later an `eq:` label and cite it as `Equation~\eqref{eq:name}`.

## Verification

After substantive LaTeX changes:

1. Run `latexmk main.tex`.
2. Confirm that there are no LaTeX errors, undefined citations or references, duplicate labels, overfull boxes, or unintended bibliography warnings.
3. Inspect the resulting `main.pdf` visually when layout may have changed.
4. For appendix changes, verify the supplementary-materials title page, appendix table of contents, page numbering, section numbering, and appendix bibliography.
5. Confirm that `wordcount.tex` is regenerated and still excludes the title page, references, and appendix.

## Project History

For substantive work, create or append to:

```text
project_history/Yusaku_Horiuchi/YYYY-MM-DD by Codex.md
```

Use the local date and time in `America/New_York`. Record the user request, model/runtime metadata, inputs inspected, files changed, commands run, outputs produced, verification results, and unresolved questions. Append rather than overwrite earlier entries from the same day.
