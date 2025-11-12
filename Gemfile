source "https://rubygems.org"

# Allow local Ruby newer than CI while ensuring compatibility with CI's Ruby
# This accepts any Ruby >= 3.2.9 and < 4.0 so your local 3.4.7 will work,
# while CI pinned to 3.2.9 remains compatible.
ruby '>= 3.2.9', '< 4.0'

# Use github-pages so local builds mirror GitHub Pages environment.
# If you prefer to use plain Jekyll, replace with `gem 'jekyll'`.
gem "github-pages"

group :test do
  gem "html-proofer"
end
