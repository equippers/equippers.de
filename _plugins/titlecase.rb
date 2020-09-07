require 'liquid'

module Titlecase
	def titlecase(words)
		return words.split(' ').map(&:capitalize).join(' ')
	end
end

Liquid::Template.register_filter(Titlecase)
