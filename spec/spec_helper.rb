require 'pry'
require 'rspec'
require 'capybara/rspec'
require_relative '../lib/articles.rb'
require_relative '../app.rb'
require 'json'
set :environment, :test

Capybara.app = Sinatra::Application
