require 'rubygems'
require 'sinatra/base'

class SequenceDemo < Sinatra::Base
  get '/' do
    $char_dist = []
    call './runner wat.fasta'
    @char_dist = $char_dist
    erb :index
  end
end

SequenceDemo.run!

