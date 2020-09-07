# see github.com/tsmango/jekyll_alias_generator

module Jekyll

	class AliasGenerator < Generator

		def generate(site)
			@site = site

			process_pages()
			# process_collection('posts')
		end

		def process_pages()
			@site.pages.each do |page|
				generate_aliases(page)
			end
		end

		def process_collection(name)
			@site.collections[name].docs.each do |item|
				generate_aliases(item)
			end
		end

		def generate_aliases(page)
			alias_paths ||= Array.new
			alias_paths << page.data['aliases']
			alias_paths.compact!

			alias_paths.flatten.each do |alias_path|
				alias_path = File.join('/', alias_path.to_s)

				alias_dir  = File.extname(alias_path).empty? ? alias_path : File.dirname(alias_path)
				alias_file = File.extname(alias_path).empty? ? "index.html" : File.basename(alias_path)

				fs_path_to_dir = File.join(@site.dest, alias_dir)
				alias_sections = alias_dir.split('/')[1..-1]

				FileUtils.mkdir_p(fs_path_to_dir)

				File.open(File.join(fs_path_to_dir, alias_file), 'w') do |file|
					file.write(alias_template(page.url))
				end

				alias_sections.size.times do |sections|
					@site.static_files << Jekyll::AliasFile.new(@site, @site.dest, alias_sections[0, sections + 1].join('/'), '')
				end
				@site.static_files << Jekyll::AliasFile.new(@site, @site.dest, alias_dir, alias_file)
			end
		end

		def alias_template(goes_to)
<<-EOF
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="canonical" href="#{@site.config['url']}#{goes_to}">
		<meta http-equiv="refresh" content="0;url=#{@site.config['url']}#{goes_to}">
	</head>
</html>
EOF
		end
	end

	class AliasFile < StaticFile
		require 'set'

		def modified?
			return false
		end

		def write(dest)
			return true
		end
	end
end
