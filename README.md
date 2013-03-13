samosa
======
### Statistical Analysis Map Of Statistical Analyses

To use:

* make sure imagemagick >=6.8 is installed
* gem install rasem, color, trollop
* use the runner with your sequence file:


        ruby runner [options] sequence.file

#### CLI options

     --density, -d <i>:  Integer i specifies the width of the final png image in DPI
                         default: 700 (DPI roughly corresponds to PPI on most monitors)
        --keep-svg, -k:  Do not delete the .svg file after creating the .png

* after passing 'sequence.file', the final image file will be named 'sequence.file.png'
* open in ur fav browser or imageviewer
