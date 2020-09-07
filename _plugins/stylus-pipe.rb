require 'liquid'

module Stylusize
	def stylusize(code)
		begin
			cache.getset(code) do
				setup
				Stylus.compile code
			end
		rescue => e
			# puts "Stylusize Exception: #{e.message}"
			logger.error e.message
			e.backtrace.each { |line| logger.error line }
		end
	end

	def cache
		@@cache ||= Jekyll::Cache.new("Stylusize")
	end

	def setup
		return if @setup
		require 'stylus'
		Stylus.compress = true
		Stylus.paths << @context.registers[:site].config['stylus']['path'] if @context.registers[:site].config['stylus']['path']
		@setup = true
	rescue LoadError
		STDERR.puts 'You are missing a library required for Stylus. Please run:'
		STDERR.puts '  $ [sudo] gem install stylus'
		raise FatalException.new('Missing dependency: stylus')
	end
end

Liquid::Template.register_filter(Stylusize)
