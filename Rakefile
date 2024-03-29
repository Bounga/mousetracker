require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

desc "Generates documentation"
task :doc => :dist do
  require 'lib/pdoc/pdoc'
  require 'fileutils'
  require 'tempfile'
  
  output_directory    = 'doc'
  templates_directory = File.join('lib', 'pdoc_templates')
  javascript_files    = File.join('src', '**', '*.js')
  
  FileUtils.rm_rf(output_directory)
  FileUtils.mkdir_p(output_directory)
  
  temp = Tempfile.new('fx_doc')
  Dir.glob(javascript_files).each do |f|
    temp << "\n" << File.read(f)
  end
  temp.rewind
  
  FileUtils.cp(DIST_OUTPUT, File.join(templates_directory, 'html', 'assets', 'javascripts'))
  FileUtils.cp(PACKED_DIST_OUTPUT, File.join(templates_directory, 'html', 'assets', 'javascripts'))
  
  ROOT_DIR = ENV['ROOT_DIR'] || FileUtils.pwd
  PDoc::Runner.new(temp.path, :output => output_directory, :templates => templates_directory).run
  temp.close
end

desc "Alias for doc"
task :default => :doc


desc "Build all dist files"
task :build => :'build:packed'

desc "Alias for build"
task :dist => :build

DIST_DIRECTORY      = 'dist'
DIST_FILES          = %w(mousetracker.js)
DIST_OUTPUT         = File.join(DIST_DIRECTORY, 'mousetracker.js')
PACKED_DIST_OUTPUT  = File.join(DIST_DIRECTORY, 'mousetracker_packed.js')

YUI_COMPRESSOR      = 'java -jar lib/yuicompressor/yuicompressor-2.3.5.jar'

namespace :build do
  def concat_files(files, output)
    FileUtils.mkdir_p(File.dirname(output))
    
    file = File.new(output, 'w')
    files.each do |f|
      file << "\n" << File.read(File.join('src', f))
    end
    file.close
  end
  
  desc "Builds dist file (not compressed)"
  task :unpacked do
    concat_files(DIST_FILES, DIST_OUTPUT)
  end
  
  desc "Builds base dist file (compressed by yui compressor)"
  task :packed => :unpacked do
    system "#{YUI_COMPRESSOR} #{DIST_OUTPUT} > #{PACKED_DIST_OUTPUT}"
  end 
end