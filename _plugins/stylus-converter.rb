module Jekyll
	class StylusConverter < Converter
		safe true

		def setup
			return if @setup
			require 'stylus'
			Stylus.compress = @config['stylus']['compress'] if
				@config['stylus']['compress']
			Stylus.paths << @config['stylus']['path'] if @config['stylus']['path']
			@setup = true
		rescue LoadError
			STDERR.puts 'You are missing a library required for Stylus. Please run:'
			STDERR.puts '  $ [sudo] gem install stylus'
			raise FatalException.new('Missing dependency: stylus')
		end

		def matches(ext)
			ext =~ /\.styl$/i
		end

		def output_ext(ext)
			'.css'
		end

		def convert(content)
			begin
				setup
				Stylus.compile content
			rescue => e
				puts "Stylus Exception: #{e.message}"
			end
		end
	end
end
