module Jekyll
	class BundleJs < Generator

		def generate(site)
			typescriptFiles = Dir['_js/src/**/*.ts']

			needsToBeBundled = typescriptFiles.any? { |file| Time.new - File.mtime(file) < 1 }

			bundle if needsToBeBundled
		end
	end
end

def install
	puts "\nInstalling npm packages...".yellow
	system "npm install"
end

def bundle
	puts "Transpiling and bundling JS...".yellow
	system "npm run bundle"
end

Jekyll::Hooks.register :site, :after_init do |site|
	install
	bundle
end
