module.exports = {
  // Settings: Turn on/off build features
  clean: false,
  styles: true,
  images: true,
  scripts: true,
  copy: true,
  reload: true,

  // Global project folder destinations
  input: "src/",
  html: "./",
  output: "dist/",

  // Styles
  stylesSrc: "src/sass/**/*.{scss,sass,css}",
  stylesDest: "dist/css/",

  // Images
  imagesSrc: "src/img/*.*",
  imagesDest: "dist/img/",

  // Scripts
  scriptsSrc: "src/js/*",
  scriptsDest: "dist/js/",

  // Copy
  copySrc: "src/copy/**/*",
  copyDest: "dist/",

  // reload
  reload: "./dist",
};
