file = ARGV.shift
if file.nil? 
  puts "Usage: ruby runner.rb file.fasta"
  exit -1
end

puts "Moving file in place..."
`mv #{file} input.fasta`
puts "Writing out SVG..."
`rasem test.rasem`
puts "Converting SVG to PNG..."
`mogrify -format png test.svg`
`mv test.png #{file}.png`
puts "Cleaning up..."
`rm test.svg`
puts "Moving file back..."
`mv input.fasta #{file}`
