# LaTeX Research Article Template

This repository contains my LaTeX template for research articles. It is set up
for a modular manuscript with separate files for the title page, preamble,
sections, appendix, figures, and bibliography.

## Public Guide

The public guide explains how to apply the template's writing and formatting
standards to an existing Overleaf project. It also documents the complete
reference template. The guide is designed to publish through GitHub Pages at
<https://yhoriuchi.github.io/latex-research-article-template/>.

## Compile

Compile `main.tex`.

```sh
latexmk main.tex
```

On Overleaf, select **pdfLaTeX** under **Menu → Settings → Compiler**. The
supplied `latexmkrc` attaches automatic TeXcount generation to the `pdflatex`
rule. If a project must use LuaLaTeX or XeLaTeX, preserve that compiler and add
an equivalent TeXcount hook to its corresponding `latexmkrc` rule.

To clean generated files:

```sh
latexmk -c main.tex
```

## Structure

- `main.tex`: main document file.
- `preamble.tex`: packages, formatting, and global macros.
- `titlepage.tex`: title, author information, abstract, and blind-review switch.
- `sections/`: main manuscript sections.
- `appendix/`: supplementary materials.
- `figures/`: figure PDFs and matching figure snippets.
- `bibfiles/main.bib`: sample bibliography entries.
- `bibfiles/apsa-leeper.bst`: APSA-style BibTeX style file.

## Common Edits

- Set `\blind` in `preamble.tex` to `1` for a blind version.
- Update title, date, abstract, and keywords in `titlepage.tex`.
- Add manuscript sections in `sections/` and include them from `main.tex`.
- Add appendix sections in `appendix/appendix.tex`; the appendix-only table of
  contents updates automatically after recompiling.
- Use `\citetappendix{...}` and `\citepappendix{...}` for citations that should
  appear in the separate appendix bibliography.
- For each figure, keep the PDF and TeX snippet stems aligned, for example
  `figures/example.pdf` and `figures/example.tex`.
- Add references to `bibfiles/main.bib` and cite them with `natbib` commands
  such as `\citet{...}` and `\citep{...}`.

## Float Pages and Submission Links

Pages containing only figures or tables start their first float at the top of
the text area, using `\setlength{\@fptop}{0pt}` in `preamble.tex`. This setting
does not change `[!t]` placement on pages containing manuscript text. With
multiple floats, the space between them may still stretch.

For uncolored, borderless links that remain clickable, uncomment
`\hypersetup{hidelinks}` after the colored-link settings in `preamble.tex`.
The `draft` option to `hyperref` instead disables hyperlinks. Follow the
target journal's requirements when choosing a submission setting.

## Word Count

The word count is generated automatically by `latexmk` using `texcount`.
It is written to `wordcount.tex`, which is ignored by git and read by
`titlepage.tex`.

By default, TeXcount ignores the title page, references, and appendix using
`%TC:ignore` blocks in `main.tex`.

With the supplied `latexmkrc` unchanged, `wordcount.tex` is regenerated only
when pdfLaTeX runs. Selecting LuaLaTeX or XeLaTeX in Overleaf without adding a
matching compiler rule leaves the word count stale or displays the `N/A`
fallback.

## Notes

The template uses `pdflatex`, `natbib`, and BibTeX. The bundled
`bibfiles/apsa-leeper.bst` file includes its own provenance and copying notice;
it is retained here so the template works out of the box.
