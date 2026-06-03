$pdf_mode = 1;
$pdflatex = 'texcount -inc -sum -1 main.tex > wordcount.tex; pdflatex -interaction=nonstopmode -halt-on-error %O %S';
$bibtex_use = 2;
